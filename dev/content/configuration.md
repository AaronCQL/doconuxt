# Configuration

## Content

Uses `@nuxt/content`.

- Styles for the Markdown content is located at `~/assets/css/content.css`

> Refer to https://content.nuxtjs.org/configuration/ for more information.

## KaTeX

Uses `katex`, `remark-math`, and `rehype-katex`.

- KaTeX CSS is imported in `~/assets/css/katex.css`
- `remark-math` and `rehype-katex` are added to `nuxt.config.js` in `content.markdown.remarkPlugins`.

## Tailwind

Uses `@nuxtjs/tailwindcss`.

## Color Mode

Uses `@nuxtjs/color-mode`.

- Colors for the themes are defined in `~/assets/css/theme.css`
- The theme switcher component is located at `~/components/ThemeSwitcher.vue`

## Prism

Uses [`prism-themes`](https://www.npmjs.com/package/prism-themes).

To change themes, in `nuxt.config.js`:

```js{1,3-5}[nuxt.config.js]
content: {
  markdown: {
    prism: {
      // change your theme here
      theme: "prism-themes/themes/prism-dracula.css",
    },
  },
},
```

> Refer to https://content.nuxtjs.org/configuration/#markdownprismtheme for more information.
