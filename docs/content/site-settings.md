# Site Settings

To start configuring the site settings (like metadata and GitHub repository), create a `content/_config/settings.json5` file like so:

```
content/
├── _config/
│   └── settings.json5
...
```

The following example shows the full schema of `settings.json5`:

```json{}[settings.json5]
{
  "title": string, // important
  "description": string, // important
  "github": string // optional
}
```

Items marked with *important*, though not strictly required, are highly recommended to be set.

## `title`

- Type: `string`
- Description: title of the web page; used for the HTML title tag
- Default: `package.json` title

## `description`

- Type: `string`
- Description: description of the web page; used in the HTML meta tag for the description tag
- Default: `package.json` description

## `github`

- Type: `string`
- Description: the `<user>/<repo>` where your source code is at; used to generate the correct link at the Topnav
- Default: `null`

## Example

```json{}[settings.json5]
{
  "title": "Doconuxt",
  "description": "A @nuxt/content powered static site generator for Markdown content.",
  "github": "AaronCQL/doconuxt"
}
```