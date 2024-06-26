import type { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import NextLink from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vsc from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => (
      <NextLink href={href} className="underline text-cyan-500 px-1">
        {children}
      </NextLink>
    ),
    img: ({ src }) => (
      <NextImage src={src} width={850} height={639} alt="-" className="my-8" />
    ),
    ul: ({ children }) => <ul className="list-disc">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
    li: ({ children }) => <li className="ml-4">{children}</li>,

    h1: ({ children }) => (
      <h1 className="font-merriweather my-4 text-3xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl mb-8 text-start">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="font-merriweather my-4 text-2xl font-extrabold leading-none text-gray-900 md:text-4xl lg:text-4xl mb-6 text-start">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-merriweather my-4 text-xl leading-none text-gray-900 md:text-3xl lg:text-2xl mb-3 text-start">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-merriweather my-4 text-md leading-none text-gray-900 md:text-2xl lg:text-xl mb-3 text-start">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-merriweather my-4 text-sm font-extrabold leading-none text-gray-900 md:text-xl lg:text-lg mb-3 text-start">
        {children}
      </h5>
    ),
    p: ({ children }) => <div className="mb-3">{children}</div>,
    blockquote: ({ children }) => (
      <figure className="mt-10 border-l border-amber-600 pl-6">
        <blockquote className="text-gray-900">{children}</blockquote>
      </figure>
    ),
    code: ({ children, className }) => {
      if (!className)
        return <code className="bg-cyan-100 px-1 rounded-sm">{children}</code>;

      return (
        <SyntaxHighlighter
          language={
            className == "language-sh"
              ? "shell"
              : className.replace("language-", "")
          }
          style={vsc}
          wrapLongLines={true}
          customStyle={{
            borderRadius: ".7rem",
            padding: `1.2rem 1rem`,
            shadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
    pre: ({ children }) => {
      return <pre className={"overflow-x-scroll"}>{children}</pre>;
    },
    table: ({ children }) => (
      <table className="min-w-full divide-y divide-gray-300">{children}</table>
    ),
    th: ({ children }) => (
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {children}
      </td>
    ),
    tr: ({ children }) => <tr className="even:bg-gray-50">{children}</tr>,

    ...components,
  };
}
