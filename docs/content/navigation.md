# Navigation

To start configuring the side and top navigation (referred to as **Sidenav** and **Topnav**), create a `content/_config/navigation.json5` file like so:

```
content/
├── _config/
│   └── navigation.json5
...
```

- The `_config/` directory is where all Doconuxt configuration files reside in
- [JSON5](https://json5.org/) is a superset of JSON which allows for more developer friendly features like comments and trailing commas

<callout type="warning" title="warning">

Use the `.json5` extension if you want to enjoy the JSON5 features like comments. Using JSON5 features in a `.json` file will likely result in parsing errors.

</callout>

## Sidenav

The following example shows the full schema of the `sidenav` key in `navigation.json5`. Note that most fields are optional, and comes with sensible defaults.

```json{}[navigation.json5]
{
  "sidenav": [ // Array<LinkGroup>
    { // LinkGroup
      "category": string, // optional
      "links": [ // Array<Link>
        { // Link
          "route": string, // required
          "title": string, // optional
          "toc": number, // optional
          "persistentToc": boolean // optional
        }
      ]
    }
  ]
}
```

### `sidenav` (required)

- **Description**: each `LinkGroup` has an optional `category` key and a required `links` key, and can be thought of as a group of related links
- **Type**: `Array<LinkGroup>`

### `category`

- **Description**: the category name of the group of `links`; displayed on the sidenav at the top of the group of links
- **Type**: `string`
- **Default**: `null`

### `links` (required)

- **Description**: each `Link` contains a required `route` key, and 3 other optional keys (`title`, `toc`, and `persistentToc`)
- **Type**: `Array<Link>`

### `route` (required)

- **Description**: the actual page route of the `Link` (refer to [page routing](/page-routing))
- **Type**: `string`

Rule of thumb: the first leading `/` is always present, and the last trailing `/` should never be present. For instance, use `/home` instead of `home` or `/home/`

### `title`

- **Description**: the title of the `Link`, shown in the sidenav and the pagination at the bottom of each page, and used as part of the HTML title (on page routes other than `/`)
- **Type**: `string`
- **Default**: inferred from the YAML front matter title, or the first H1 tag in the Markdown content, or `Untitled` if it cannot be inferred

Order of precedence: `title` > YAML front matter title > first H1 tag

### `toc`

- **Description**: the level of depth of the table of contents
- **Type**: `number`
- **Default**: `2`

The maximum number is `3`, and any number less than or equal to `1` will disable the table of contents.

### `persistentToc`

- **Description**: whether to show the table of contents regardless of the current route
- **Type**: `boolean`
- **Default**: `false`

### Example

Taking the `content/` directory as the root, the most basic example to generate the Sidenav links to `index.md`, `nested/index.md`, and `nested/hello.md` is as follows:

```json5{}[navigation.json5]
{
  "sidenav": [
    {
      "links": [
        { "route": "/" }, // index.md
        { "route": "/nested" }, // nested/index.md
        { "route": "/nested/hello" } // nested/hello.md
      ]
    }
  ]
}
```

<callout>

For a real world example, [check out the `navigation.json5` for this very documentation site](https://github.com/AaronCQL/doconuxt/blob/master/docs/content/_config/navigation.json5).

</callout>

## Topnav

<callout>

**Coming soon!**

</callout>
