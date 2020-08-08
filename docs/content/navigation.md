# Navigation

To start configuring the side and top navigation, create a `content/_config/navigation.json5` file like so:

```
content
├── _config
│   └── navigation.json5
...
```

- The `_config/` directory is where all Doconuxt configuration files reside in
- [JSON5](https://json5.org/) is a superset of JSON which allows for more developer friendly features like comments and trailing commas

<alert type="warning" title="warning">

Use the `.json5` extension if you want to enjoy the JSON5 features like comments. Using JSON5 features in a `.json` file will likely result in parsing errors.

</alert>

## JSON schema

The full schema of the `navigation.json5` is given here as reference. Note that most fields are optional and come with sensible defaults.

```json{}[navigation.json5]
{
  "topnav": ..., // coming soon!
  "sidenav": [
    {
      "category": string, // optional
      "links": [          // required
        {
          "route": string,         // required
          "title": string,         // optional
          "toc": number,           // optional
          "persistentToc": boolean // optional
        }
      ]
    }
  ]
}
```

## Side navigation

Taking out all the required fields, the most basic example to generate the sidenav links to `index.md`, `nested/index.md`, and `nested/hello.md` is as follows:

```json5{}[navigation.json5]
{
  "sidenav": [
    {
      "links": [
        { "route": "/" },
        { "route": "/nested" },
        { "route": "/nested/hello" }
      ]
    }
  ]
}
```

<alert>

For a real world example, check out the `navigation.json5` for this very documentation site.

</alert>

### `sidenav` (required)

- **Type**: `Array<LinkGroup>`
- **Description**: each `LinkGroup` has an optional `category` key and a required `links` key

### `category` (optional)

- **Type**: `string`
- **Description**: category of the group of links; displayed on the sidenav at the top of the group of links
- **Default**: `""`

### `links` (required)

- **Type**: `Array<Link>`
- **Description**: each `Link` contains a required `route` key, and 3 other optional keys

### `route` (required)

- **Type**: `string`
- **Description**: the actual page route of the `Link` (refer to [page routing](/page-routing))

Rule of thumb: the first leading `/` is always present, and the last trailing `/` should never be present. For instance, use `/home` instead of `home` or `/home/`

### `title` (optional)

- **Type**: `string`
- **Description**: the title of the `Link`, shown in the sidenav and the pagination at the bottom of each page
- **Default**: inferred from the YAML front matter title, or the first H1 tag in the Markdown content, or `Untitled` if it cannot be inferred

Order of precedence: `title` > YAML front matter title > first H1 tag

### `toc` (optional)

- **Type**: `number`
- **Description**: the level of depth of the table of contents
- **Default**: `2`

The maximum number is `3`, and any number less than or equal to `1` will disable the table of contents.

### `persistentToc` (optional)

- **Type**: `boolean`
- **Description**: whether to show the table of contents regardless of the current route
- **Default**: `false`

## Top navigation

<alert>

**Coming soon!**

</alert>
