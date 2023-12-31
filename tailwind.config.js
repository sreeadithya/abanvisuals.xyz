module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spaceMono: "Helvetica",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
