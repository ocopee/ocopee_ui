"use client";

import {
  type ChangeEvent,
  Fragment,
  type MouseEvent,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import { Node } from "slate";
import { revalidatePost, updatePost } from "components/Post/cms";

const RTELite = dynamic(() => import("rtelite").then((rtel) => rtel.RTELite), {
  ssr: false,
});

const uri =
  process.env.NODE_ENV === "production"
    ? "https://cms.ocopee.com"
    : "http://localhost:3016";

const serialize = (nodes) => {
  return nodes.map((n) => Node.string(n)).join("\n");
};

export default function PostNewPage({ params: { id } }) {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const localStorageKey = `rte-${id}`;

  const createWord = async (text: string) => {
    return fetch(uri + "/word/", {
      method: "POST",
      body: JSON.stringify({ message: text }),
    }).then((data) => data.json());
  };

  async function clickSubmit(_event: MouseEvent<HTMLButtonElement>) {
    const raw = localStorage.getItem(localStorageKey);
    try {
      const content = JSON.parse(raw);
      const body = { title, description, content };
      const post = await updatePost(id, body);
      revalidatePost(post);

      /* create words */
      const text = serialize(content);
      const word = await createWord(text);
      console.log(word);
    } catch {}
  }

  const fetchPost = async () => {
    return fetch(uri + "/post/" + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((post) => {
        setTitle(post.title);
        setDescription(post.description);
        if (post.content) {
          localStorage.setItem(localStorageKey, JSON.stringify(post.content));
        }
        setLoading(false);
        return post;
      });
  };

  useEffect(() => {
    fetchPost();
  }, [id]);
  if (loading) return <div>⌛️ loading...</div>;
  return (
    <Fragment>
      <nav className="flex justify-between gap-2">
        <div className="w-full">
          <label htmlFor="title-field" className="sr-only">
            title-field
          </label>
          <input
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
            name="title-field"
            id="title-field"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Nhập tiêu đề bài viết"
          />
        </div>
        <button
          className="flex justify-center rounded-md bg-amber-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={clickSubmit}
        >
          Đăng
        </button>
      </nav>
      <hr className="my-4" />

      <textarea
        className="w-full min-h-[100px] rounded-md border-slate-300 bg-transparent"
        value={description}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setDescription(event.target.value);
        }}
      ></textarea>
      <section className="my-6 mx-auto max-w-3xl">
        <RTELite
          toolbarClassName="fixed bottom-0 left-0 z-50 bg-white"
          localStorageKey={localStorageKey}
        />
      </section>
    </Fragment>
  );
}
