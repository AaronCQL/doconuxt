# Notes

Notes pertaining to the development of the `doconuxt-theme` package.

## Development

Use Yarn instead of npm; this repository relies on Yarn Workspaces.

- `~/doconuxt-theme`: source for the main package
- `~/doconuxt-dev`: dev environment to test out `doconuxt-theme`

Running `yarn dev` in either the root directory or the `~/doconuxt-dev` directory has no difference (refer to `~/package.json`).

```bash{}[terminal]
# install all dependency
$ yarn
# start developing
$ yarn dev
```

## Deploying

The `doconuxt-dev` is currently hosted on Vercel at https://doconuxt.vercel.app/ via the GitHub integration.

If only the `content` directory is changed, simply push to the `master` branch to deploy the new site.

If the `doconuxt-theme` package itself has changed, follow the steps to ensure the changes are reflected:

1. Bump version of the `doconuxt-theme` package in `package.json` in both the `/doconuxt-theme` and `/doconuxt-dev` directory (make sure they match)
2. Deploy as per normal

<alert>

Bumping the `doconuxt-theme` version is required since it forces `nuxt generate` to do a clean rebuild from the `doconuxt-theme` package.

</alert>

## Serving locally

Similar to [deploying](#deploying), in order for `nuxt start` to have the most updated changes, follow these steps:

1. Delete `doconuxt-dev/node_modules`
2. Run `yarn generate` and `yarn start` as per normal

<alert>

Deleting the `doconuxt-dev/node_modules` is required since it clears the built cache and forces a clean rebuild from the `doconuxt-theme` package.

</alert>
