import path from "path";

export default {
  mode: "universal",
  target: "static",
  srcDir: __dirname,
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [
    "@/assets/css/content.css",
    "@/assets/css/theme.css",
    "@/assets/css/katex.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  purgeCSS: {
    // prevent purge of fontawesome css
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
  plugins: ["@/plugins/navLinks", "@plugins/fontawesome"],
  components: true,
  hooks: {
    "modules:before": ({ nuxt }) => {
      // configure content dir
      nuxt.options.content.dir = path.resolve(
        nuxt.options.rootDir,
        nuxt.options.content.dir || "content"
      );
      // configure static dir
      nuxt.options.dir.static = path.resolve(nuxt.options.rootDir, "static");
      // configure components dir
      // see: https://github.com/nuxt/components#library-authors
      nuxt.hook("components:dirs", (dirs) => {
        dirs.push({
          path: path.resolve(nuxt.options.rootDir, "components/global"),
          global: true,
        });
      });
    },
  },
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  modules: ["@nuxt/content"],
  generate: {
    fallback: "404.html",
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content()
        .only(["path"])
        .where({ dir: { $ne: "/_config" } }) // exclude the /_config folder
        .fetch();

      return files.map((file) => {
        const trailingIndexRegex = /\/index\/?$/;
        return file.path.replace(trailingIndexRegex, "") || "/";
      });
    },
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-dracula.css",
      },
      remarkPlugins: [
        "remark-math",
        // https://github.com/remarkjs/remark-autolink-headings
        ["remark-autolink-headings", { behavior: "wrap" }],
      ],
      rehypePlugins: ["rehype-katex"],
    },
  },
  build: {},
};
