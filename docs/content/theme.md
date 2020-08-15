# Theme

To start configuring the main theme, make sure you have stopped your dev server before creating an `assets/css/theme.css` CSS file like so:

```
assets/
├── css/
│   └── theme.css
...
```

You may then start your dev server again.

## Main configurations

The configurations rely on the usage of CSS variables, which should be registered in the `:root` element. Using the colours of the default theme, this is how `theme.css` looks like:

```scss{}[assets/css/theme.css]
:root {
  --light-text: theme("colors.gray.900");
  --light-text-secondary: theme("colors.gray.700");
  --light-bg: theme("colors.white");
  --light-bg-secondary: theme("colors.gray.200");
  --light-primary: theme("colors.green.600");
  --light-border: theme("colors.gray.400");
  --light-border-secondary: theme("colors.gray.200");

  --dark-text: theme("colors.gray.200");
  --dark-text-secondary: theme("colors.gray.400");
  --dark-bg: theme("colors.gray.900");
  --dark-bg-secondary: theme("colors.gray.800");
  --dark-primary: theme("colors.green.400");
  --dark-border: theme("colors.gray.700");
  --dark-border-secondary: theme("colors.gray.800");
}
```

<callout>

Doconuxt uses [Tailwind CSS](https://tailwindcss.com/) under the hood, which is why the [`theme()`](https://tailwindcss.com/docs/functions-and-directives#theme) function can be used to access the default Tailwind config values.

</callout>

### Variable description

Notice that there are 7 main variables repeated twice, once with the `--light` prefix (for the light mode), and once with the `--dark` prefix (for the dark mode). Here is a brief description of the variables (without the prefixes for brevity's sake):

- **`text`**: main text colour of the body
- **`text-secondary`**: text colour of quote blocks
- **`bg`**: main background colour of the body
- **`bg-secondary`**: background colour of inline code, quote blocks, table headers
- **`primary`**: main primary colour
- **`border`**: main border colour (Sidenav/Topnav, tables, horizontal rules)
- **`border-secondary`**: border colour of H1 and H2 tags

### Overriding some variables

Missing variables will fallback to the default Doconuxt theme. There is no need to declare all variables if you only want to override a few. For example, to override only the primary colours while retaining the other variables:

```scss
:root {
  --light-primary: #FF5733;

  --dark-primary: #FF886E;
}
```

## Advanced

Since this `theme.css` file is essentially just a normal CSS file that is imported into Doconuxt, you can even write new styles and override the [existing styles](https://github.com/AaronCQL/doconuxt/tree/master/packages/doconuxt/assets/css) if you know what you are doing.
