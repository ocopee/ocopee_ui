import path from "path";

const rtelite = path.join(path.dirname(require.resolve("rtelite")), "**/*.js");
const forms = require("@tailwindcss/forms");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}", // Note the addition of the `app` directory.
    "./mdx-components.tsx", // Note the addition of the `app` directory.
    rtelite,
  ],
  // content: {
  //   files: [
  //     "./app/**/*.{js,ts,jsx,tsx,md,mdx}", // Note the addition of the `app` directory.
  //     "./components/**/*.{js,ts,jsx,tsx,md,mdx}", // Note the addition of the `app` directory.
  //     "./mdx-components.tsx", // Note the addition of the `app` directory.
  //   ],
  //   transform: typewindTransforms,
  // },
  theme: {
    extend: {
      fontFamily: {
        paragraph: ["var(--font-literata)"],
        heading: ["var(--font-merriweather)"],
      },
    },
  },
  plugins: [forms],
};
