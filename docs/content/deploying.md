# Deploying

Doconuxt makes use of the new `nuxt generate` features which appeared in Nuxt v2.14. You may want to [read about it](https://nuxtjs.org/blog/nuxt-static-improvements/), although it is not necessary to know how it works. What it means is that if the only changes occur within your `content/` directory, you can expect subsequent builds (after the first) to be [on average 3.6x faster](https://nuxtjs.org/blog/nuxt-static-improvements/).

This greatly decreases cost when relying on continuous deployment services like Vercel or Netlify, which bill based on the amount of time taken for a deployment.

<callout type="warning" title="important">

Make sure your `package.json` contains the following scripts:

```json
{
  // ...
  "scripts": {
    "dev": "nuxt",
    "generate": "nuxt generate",
    "start": "nuxt start"
  },
  // ...
}
```

</callout>

## Serving locally

You may want to build and serve the website locally first to see if there are any unexpected bugs or issues. Do the following:

1. Run `yarn generate` (or `npm run generate`) to generate the built files
2. Then, run `yarn start` (or `npm run start`) to start serving the built files locally

> At this point, you may also want to run the `generate` command a few times to experience the speed of the subsequent builds.

## Vercel

Assuming your Doconuxt site lives in the root of your project/repository, use the following settings:

- **Build command**: `yarn generate` (or `npm run generate`)
- **Output directory**: `dist`

## Netlify

Assuming your Doconuxt site lives in the root of your project/repository, use the following settings:

- **Build command**: `yarn generate` (or `npm run generate`)
- **Publish directory**: `dist`
