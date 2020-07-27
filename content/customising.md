---
title: Customising
---

# Customising

## Prism

Refer to https://content.nuxtjs.org/configuration/#markdownprismtheme for more information. The [`prism-themes`](https://www.npmjs.com/package/prism-themes) package is already included in this build.

To change themes, in `nuxt.config.js`:

```js
content: {
  markdown: {
    prism: {
      // change your theme here
      theme: "prism-themes/themes/prism-dracula.css",
    },
  },
},
```
