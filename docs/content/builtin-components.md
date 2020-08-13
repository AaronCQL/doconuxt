# Built-in Components

<callout type="warning" title="Work In Progress">

More components are coming up!

</callout>

Doconuxt comes with a few built-in components that can be used out of the box.

## Callout

Use the *Callout* component to bring the reader's attention to certain parts of your text.

### Props

- **`type`**
  - **Description**: the style of the callout
  - **Type**: `string`
  - **Values**: `info`, `warning`, `danger`
  - **Default**: `info`
- **`title`**
  - **Description**: the title of the callout
  - **Type**: `string`
  - **Default**: `null`

### Examples

<callout type="danger" title="Custom Title">

This is a `danger` callout with a **custom title**.

</callout>

```md{}[md]
<callout type="danger" title="Custom Title">

This is a `danger` callout with a **custom title**.

</callout>
```

## Spoiler

Use the *Spoiler* component to hide unnecessary details from the reader.

### Props

- **`title`**
  - **Description**: the title of the spoiler
  - **Type**: `string`
  - **Default**: `Spoiler`

### Examples

<spoiler>

Here is your **hidden** content.

<spoiler title="Nested Spoiler">

And here is your **hidden** *nested* content.

</spoiler>

</spoiler>

```md{}[md]
<spoiler>

Here is your **hidden** content.

<spoiler title="Nested Spoiler">

And here is your **hidden** *nested* content.

</spoiler>

</spoiler>
```
