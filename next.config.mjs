import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

const withMDX = createMDX({
  experimental: {
    mdxRs: true,
    // swcPlugins: [["typewind/swc", {}]],
  },

  options: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],

  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://ocopee.cdn.vccloud.vn"
    : undefined,

  images: {
    minimumCacheTTL: 60 * 60 * 24,
  },
};

export default withMDX(nextConfig);
