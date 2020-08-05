import path from "path";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  srcDir: __dirname,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
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
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/content.css",
    "@/assets/css/theme.css",
    "@/assets/css/katex.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  /*
   ** Prevent purge of fontawesome css
   ** https://github.com/FortAwesome/vue-fontawesome#purgecss
   */
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/navLinks", "@plugins/fontawesome"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
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
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/#install-the-color-mode-module
    "@nuxtjs/color-mode",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
  ],
  generate: {
    fallback: "404.html",
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content()
        .only(["path"])
        .where({ path: { $ne: "/sidenav" } }) // exclude the sidenav.json config
        .fetch();

      return files.map((file) => {
        const trailingIndexRegex = /\/index\/?$/;
        return file.path.replace(trailingIndexRegex, "") || "/";
      });
    },
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
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
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
