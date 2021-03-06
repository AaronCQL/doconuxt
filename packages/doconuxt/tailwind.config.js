/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: "var(--primary)",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
      },
      opacity: {
        "10": "0.1",
        "20": "0.2",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "content/**/*.md",
      path.join(__dirname, "components/**/*.vue"),
      path.join(__dirname, "layouts/**/*.vue"),
      path.join(__dirname, "pages/**/*.vue"),
      path.join(__dirname, "plugins/**/*.js"),
      "nuxt.config.js",
    ],
  },
};
