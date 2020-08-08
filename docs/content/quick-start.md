# Quick Start

This guide assumes you have [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) installed on your machine. Both works, but yarn is recommended.

## Installation

Doconuxt is essentially just a NuxtJS application, and the set up is similar.

1. Create and change into a new directory:

    ```bash
    $ mkdir <project-name>
    $ cd <project-name>
    ```

2. Initialise with your package manager:

    ```bash
    $ yarn init # npm init
    ```

3. Install Nuxt and Doconuxt:

    ```bash
    $ yarn add -D nuxt doconuxt # npm install -D nuxt doconuxt
    ```

4. In the `package.json`, add the following scripts:

    ```json{3-6}[package.json]
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

5. Create a `nuxt.config.js` file in the root directory and import the Doconuxt theme:

    ```js{}[nuxt.config.js]
    import doconuxt from "doconuxt-theme";

    export default doconuxt;
    ```

6. Create a `content/` directory in the root of your project (this is where the Markdown files reside in)

### Directory structure example

```bash
<project-name>
├── content
│   └── index.md
├── nuxt.config.js
├── package.json
└── yarn.lock # package-lock.json
```

## Start writing

To start writing, make sure you have a `content/` directory in the root of your project for your Markdown files.

Within the `content/` directory, create an `index.md` file and fill it with some Markdown:

```md{}[/content/index.md]
# Hello World!

This is `doconuxt`.
```

Then, start your development server:

```bash
yarn dev # npm run dev
```

If all goes well, you should be able to open up [http://localhost:3000](http://localhost:3000), and enjoy instantaneous updates whenever you save your changes.

Read on to learn how [page routing](/page-routing) works, and how to configure the [side navigation bar](/navigation).
