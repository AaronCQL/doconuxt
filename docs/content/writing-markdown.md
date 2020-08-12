# Writing Markdown

This assumes you are comfortable with the Markdown syntax. Refer to the [official guide](https://www.markdownguide.org/basic-syntax/) if you need a refresher.

All the official syntax is supported, with some added features that will be discussed here.

## Links

### Internal links

When linking to another internal page, always use the absolute [page route](/page-routing) of that page.

For example, with a directory structure like this:

```
content/
├── index.md
├── welcome.md
└── nested/
    ├── index.md
    └── hello.md
```

In order to link from `nested/hello.md` to `index.md`:

```md{}[nested/hello.md]
[link](/).
```

And from `welcome.md` to `nested/hello.md`:

```md{}[welcome.md]
[link](/nested/hello).
```

### External links

Use it as per normal. The default behaviour will open the external link in a new tab.

## Math

$\LaTeX$ flavoured math is supported natively. Internally, [$\KaTeX$](https://katex.org/) is used as the rendering engine.

### Inline mode

For inline mode, use `$` as delimiters.

For example,

```tex{}[md]
$e^{i\pi}$ is really just $1$
```

Will be rendered as: $e^{i\pi}$ is really just $1$.

### Display mode

For display mode, use `$$` as delimiters.

For example,

```tex{}[md]
$$
e^{i\pi} = 1
$$
```

Will be rendered as:

$$
e^{i\pi} = 1
$$

<callout>

For display mode to be properly centred, **make sure the `$$` delimiters are on different lines**.

</callout>


## HTML

When using Markdown inside HTML elements, it must be preceded and followed by an empty line for the block to be treated as Markdown. Otherwise, the whole block will be treated as custom HTML.

For example, the following will **not be parsed as Markdown**:

```md
<div>
1. first
2. second
</div>
```

But this will:

```md
<div>

1. first
2. second

</div>
```

## Vue components

It is possible to include your own custom Vue components directly in the Markdown.

First, put your components in `components/global/` directory and you can start using them in your Markdown without having to import them.

Take note of the caveats:

1. Use `kebab-case`, and not `PascalCase` when referring to the components
   - eg. `<my-component>` instead of `<MyComponent>`
2. Do no use self-closing tags
   - eg. `<my-component></my-component>` instead of `<my-component />`

> Refer to the [official @nuxt/content documentation](https://content.nuxtjs.org/writing/#vue-components) for more information.

## Built-in components

Doconuxt comes with a few built-in components that can be used out of the box.

### Callout

#### Props

- `type`
  - Type: `string`
  - Values: `info`, `warning`, `danger`
  - Default: `info`
- `title`
  - Type: `string`
  - Default: `null`

#### Examples

<callout type="info">

This is an `info` callout

</callout>

```md{}[md]
<callout type="info">

This is an `info` callout

</callout>
```

---

<callout type="warning" title="warning">

This is a `warning` callout

</callout>

```md{}[md]
<callout type="warning" title="warning">

This is a `warning` callout

</callout>
```

---

<callout type="danger" title="Custom Title">

This is a `danger` callout

</callout>

```md{}[md]
<callout type="danger" title="Custom Title">

This is a `danger` callout

</callout>
```
