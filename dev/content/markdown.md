# Markdown Test

This is a **Nuxt Content Docs Template**. Here's a [link to no where]().

> This is a `quote`!  
> Second line?  
> MORE!

## Table

| This is col 1 | This is col 2 | This is `col 3` |
| ------------- | :-----------: | --------------: |
| col 1 is      | left-aligned  |         `$1600` |
| col 2 is      |   centered    |             $12 |
| col 3 is      | right-aligned |              $1 |

## Lists

Here is an **unordered list**:

- Some unordered lists with some really long text about random things just to fill it up really well and to see how overflow looks like and with more content to fill than is ever truly needed
  - Second level
    - Third level
    - Third level
  - Second level
- Another one?
  - what
  - [ ] checkbox
  - [ ] another

An **ordered list**:

1. Some unordered lists
   1. Second level
      1. Third level
      2. Third level
   2. Second level
2. Another first level

And a **mixed one**:

1. Some ordered lists
   - Second level
      1. Third level
      2. Third level
   - Another second level
2. Second Item

## Code section

This is an `inline code`.

And then a JavaScript code block:

```js
function sayHello(toWho) {
    console.log(`Hello, ${toWho}!`);
}
sayHello("Nuxt";)
```

And a Java code block:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Nuxt!");
    }
}
```

## Math section

Here is some inline math: $e=mc^2$

And some centered math:

$$
\nabla L_D(\vec{w}) = \left[ \frac{\partial L_D}{\partial w_0},\dots, \frac{\partial L_D}{\partial w_n}  \right]
$$

$$
e^{i\pi} + 1 = 0
$$

## Alert blocks

<alert type="info">

This is an `info` block.

```md{}[*.md]
<!-- title is false by default -->
<alert type="info">

This is an `info` block.

</alert>
```

</alert>

<alert type="warning" :title=true>

First `p` child.

Second `p` child.

Last `p` child.

$$
\sum_x^{e^{i\pi}}2^x=\int_x^{\infty}\frac{|x|}{\zeta}
$$

</alert>

<alert type="danger" title="My Custom Title">

This is a `danger` block with a custom title.

```md{}[*.md]
<alert type="danger" title="My Custom Title">

This is a `danger` block with a custom title.

</alert>
```

</alert>

## Markdown test

`Lorem ipsum dolor` **sit amet consectetur** *adipisicing elit*. Maiores, debitis odio? Consectetur, `dignissimos quisquam`. Qui impedit ducimus voluptate magnam officiis enim commodi ratione quam. Alias vero excepturi consequatur quidem, repellendus natus nulla quaerat. Commodi, eaque sed? Corrupti, voluptate. Dolorem repellat magnam pariatur esse rerum earum ipsam accusantium, optio, cum nihil ex facere eligendi! Cum sint nostrum, minus ea doloremque facere temporibus culpa eligendi soluta expedita similique at quod velit quibusdam laudantium, officiis sunt obcaecati voluptatem? Quo dolor excepturi harum! Quod doloremque repellendus cum ipsum vitae quisquam id animi soluta! Modi pariatur eum ad laboriosam voluptas? Suscipit, quisquam laboriosam? Omnis, aperiam.

# H1 First header

## H2 Second header

### H3 Third header

#### H4 Fourth header

H5 and H6 headers are unstyled. Please do not use them.
