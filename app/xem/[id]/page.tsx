import { Fragment } from "react";
import { clsx } from "clsx";
import { CustomElement, CustomNode, CustomText } from "rtelite";

const uri =
  process.env.NODE_ENV === "production"
    ? "https://cms.ocopee.com"
    : "http://localhost:3016";

const base = {
  heading:
    "font-heading my-4 subpixel-antialiased not-italic font-normal tracking-wide line-clamp-3 leading-snug font-heading",
};

function RenderElement({ element }: { element: CustomNode }) {
  if ((element as CustomText)?.text) {
    return <span>{(element as CustomText).text}</span>;
  }

  const children = (element as CustomElement)?.children?.map((node, index) => {
    return <RenderElement key={index} element={node} />;
  });

  if (element.tag === "html") {
    return <article>{children}</article>;
  }

  if (element.tag === "p") {
    return <p>{children}</p>;
  }

  if (element.tag === "h1") {
    return <h2 className={clsx(base.heading, "text-5xl")}>{children}</h2>;
  }

  if (element.tag === "h2") {
    return <h2 className={clsx(base.heading, "text-4xl")}>{children}</h2>;
  }

  if (element.tag === "h3") {
    return <h2 className={clsx(base.heading, "text-3xl")}>{children}</h2>;
  }

  if (element.tag === "strong") {
    return <strong className={clsx(element.weight)}>{children}</strong>;
  }

  if (element.tag === "em") {
    return <em className={clsx(element.style)}>{children}</em>;
  }

  return <Fragment></Fragment>;
}

export default async function PostNewPage({ params: { id } }) {
  const fetchPost = async () => {
    return fetch(uri + "/post/" + id, {
      method: "GET",
      next: { tags: [id] },
    }).then((data) => data.json());
  };
  const post = await fetchPost();
  return (
    <Fragment>
      <RenderElement element={{ tag: "html", children: post.content }} />
    </Fragment>
  );
}
