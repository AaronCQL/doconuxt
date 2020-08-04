<template>
  <article>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
export default {
  middleware({ params, redirect }) {
    // redirects all url with trailing `xxx/index` or `xxx/index/` to `xxx`
    const path = "/" + params.pathMatch; // concat `/` prefix to handle root index page
    const trailingIndexRegex = /\/index\/?$/;
    if (path.match(trailingIndexRegex)) {
      redirect(path.replace(trailingIndexRegex, "") || "/");
    }
  },
  async asyncData({ $content, params, error }) {
    let content = await $content(params.pathMatch).fetch();

    if (Array.isArray(content)) {
      // params.pathMatch is a directory in content
      // try to find the index page
      content = content.find((page) => page.slug === "index");
    }

    if (!content) {
      return error({ statusCode: 404, message: "Not Found" });
    }

    return {
      content,
    };
  },
};
</script>
