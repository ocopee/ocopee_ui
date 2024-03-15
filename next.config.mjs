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

// const deviceSizes = [640, 768, 1024, 1280, 1536];
//
// function devide(cols) {
//   const map = cols.reduce((map, col) => {
//     deviceSizes.map((d) => map.set(d / col, 1));
//     return map;
//   }, new Map());
//   return [...map.keys()].sort((a, b) => a - b);
// }
//
// const imageSizes = devide([1, 2, 4]);
// console.log(imageSizes);

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
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [160, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536],
  },
};

export default withMDX(nextConfig);
