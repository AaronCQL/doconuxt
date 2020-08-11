# Introduction

**Doconuxt** is a [@nuxt/content](https://content.nuxtjs.org/) powered static site generator for Markdown content. It is minimal, opinionated, and comes with a default theme.

<callout type="danger" title="warning">

**Expect bugs and breaking changes before a stable version is released!** Head to the [alternatives](#alternatives) section if you need a tried and tested solution.

</callout>

## Features

- **Instantaneous hot reload** for changes within the `content/` directory
- **Zero config and easy to setup** with a small set of intuitive API
- **Blazing fast page regeneration** when deploying
- **Native support for Vue components**
- **Mobile optimised** with easy navigation
- **$\LaTeX$ math support** via $\KaTeX$

## Alternatives

### Docs Theme @nuxt/content 

This project is greatly influenced by the work of the [official Nuxt Content theme](https://content.nuxtjs.org/themes/docs/). That said, there are still significant differences in the API and behaviour. In particular, Doconuxt has less customisation and is more opinionated. 

### VuePress

The battle tested solution that is powering most of Vue's documentation. Consider using VuePress if you need a production ready solution.

### Docz / Docusaurus

Excellent choices if you are writing documentation for React libraries. However, they are not really suitable for writing documentation for Vue libraries.
