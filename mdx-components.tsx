import type { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import solarizedlight from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
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
      <figure className="mt-10 border-l border-indigo-600 pl-9">
        <blockquote className="font-semibold text-gray-900">
          {children}
        </blockquote>
      </figure>
    ),
    code: ({ children, className }) => {
      const language = className ? className.replace(/language-/, "") : "";
      return (
        <SyntaxHighlighter style={solarizedlight} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
    pre: ({ children }) => (
      <pre className="prettyprint overflow-hidden">{children}</pre>
    ),
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
