"use client";

import { type ChangeEvent, Fragment, type MouseEvent, useState } from "react";
import dynamic from "next/dynamic";

const RTELite = dynamic(() => import("rtelite").then((rtel) => rtel.RTELite), {
  ssr: false,
});

const uri =
  process.env.NODE_ENV === "production"
    ? "https://cms.ocopee.com"
    : "http://localhost:3016";

export default function PostNewPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const localStorageKey = "rte-content";
  async function clickSubmit(_event: MouseEvent<HTMLButtonElement>) {
    const raw = localStorage.getItem(localStorageKey);
    try {
      const content = JSON.parse(raw);
      console.log(content);
    } catch {}
    const data = await fetch(uri + "/post", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    }).then((data) => data.json());
    console.log(data);
  }

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
        className="w-full"
        value={description}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setDescription(event.target.value);
        }}
      />
      <section className="my-6 mx-auto max-w-3xl">
        <RTELite
          toolbarClassName="fixed bottom-0 left-0 z-50 bg-white"
          localStorageKey={localStorageKey}
        />
      </section>
    </Fragment>
  );
}
