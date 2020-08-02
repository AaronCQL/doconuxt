---
title: Deploying
---

# Deploying

This website can be easily hosted via a static site hosting service like Netlify or Vercel. A fully static Nuxt site can be [split into two different steps](https://nuxtjs.org/blog/going-full-static/#new-command-code-nuxt-export-code-): the build step (`nuxt build`), followed by the export step (`nuxt export`). As such, there are two different ways we can configure Netlify/Vercel for continuous deployment:

1. Skip the build step, and only run the export step (**default**)
2. Run both the build and the export step

## 1. Skipping the build step

This is the **default mechanism**. By skipping the build step, any changes within the `content` directory will be built as fast as possible. This helps to accrue less build time and helps to save on costs associated with Netlify/Vercel build times.

### Quick start

Make sure to configure Netlify or Vercel with the following settings:

- **Build command**: `npm run export` or `yarn export`
- **Output directory**: `dist`

If the only changes are within the `content` folder, there is no need to build the files via `nuxt build`, simply commit and push the changes.

If there are code changes in any `.vue` files, run `nuxt build` locally first, then commit and push the built files.

### How it works

In the `nuxt.config.js`, the `buildDir` is modified as such:

```js
export default {
  buildDir: process.env.NODE_ENV === "production" ? ".nuxt-prod" : ".nuxt",
}
```

When developing via `nuxt`, the built files will be generated to the `.nuxt` folder, which is ignored by git.

When building the site via `nuxt build`, the built files will be generated to the `.nuxt-prod` folder, which **should be committed and pushed to Git**.

When Netlify/Vercel is triggered to do a build, the built files will be referenced from the `.nuxt-prod` folder, which contains the files needed to run `nuxt export`.

### When to use

This assumes that for a documentation site, most of the changes that is happening would be within the `content` folder. Any changes to the Vue codebase would require the user to do a local rebuild of the `.nuxt-prod` folder first before committing and pushing the changes.

If you foresee that your site is going to have many changes within the Vue files and will not benefit from the overhead of having the developers to remember to build and push the built files, you may want to revert to running both the build and export steps within Vercel/Netlify.

## 2. Running both the build and export steps

### Quick start

In the `nuxt.config.js`, remove the `buildDir` modification:

```js
export default {
  // buildDir: process.env.NODE_ENV === "production" ? ".nuxt-prod" : ".nuxt",
}
```

Make sure to configure Netlify or Vercel with the following settings:

- **Build command**: `npm run build && npm run export` or `yarn build && yarn export`
- **Output directory**: `dist`

Now, whenever you push any changes, both the build step and the export steps will be run.
