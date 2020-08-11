import path from "path";

import { getRouteWithoutTrailingIndex } from "./utils/routeUtils";
import { USER_CONFIG_DIR } from "./utils/constants";

function inferDocumentTitle(document) {
  if (document.title) {
    // title is already set via yaml frontmatter
    return document.title;
  }

  const h1Regex = /^\s*#.*/m;
  const match = document.text.match(h1Regex);
  if (!match) {
    // no h1 tag set
    return "Untitled";
  }
  // infer title from first h1 tag
  const unparsedHeader = match[0].trim();
  const textRegex = /^#\s*/;
  return unparsedHeader.replace(textRegex, "") || "Untitled";
}

async function getContentRoutes() {
  const { $content } = require("@nuxt/content");
  const files = await $content("/", { deep: true })
    .only(["route"])
    .where({ dir: { $ne: USER_CONFIG_DIR } }) // exclude the user config folder
    .fetch();

  return files.map((file) => file.route);
}

export default {
  mode: "universal",
  target: "static",
  srcDir: __dirname,
  transpile: [__dirname],
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
  plugins: [
    "@/plugins/main",
    "@/plugins/routeHandler",
    "@/plugins/fontawesome",
    "@/plugins/vue-scrollactive",
  ],
  components: true,
  hooks: {
    "modules:before": ({ nuxt }) => {
      // configure content dir
      nuxt.options.content.dir = path.resolve(
        nuxt.options.rootDir,
        nuxt.options.content.dir || "content"
      );
      // configure static dir
      nuxt.options.dir.static = path.resolve(
        nuxt.options.rootDir,
        nuxt.options.dir.static || "static"
      );
      // configure components dir
      // see: https://github.com/nuxt/components#library-authors
      nuxt.hook("components:dirs", (dirs) => {
        dirs.push({
          path: path.resolve(nuxt.options.rootDir, "components/global"),
          global: true,
        });
      });
    },
    "content:file:beforeInsert": (document) => {
      if (document.extension === ".md") {
        // infer document title
        document.title = inferDocumentTitle(document);
        // actual route seen by users
        document.route = getRouteWithoutTrailingIndex(document.path);
      }
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
    routes: getContentRoutes,
  },
  content: {
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
};
