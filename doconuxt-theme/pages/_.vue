<template>
  <article>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
import {
  hasTrailingIndex,
  getPathWithoutTrailingIndex,
} from "../utils/pathUtils";

export default {
  middleware({ params, redirect }) {
    // redirects all url with trailing `xxx/index` or `xxx/index/` to `xxx`
    if (hasTrailingIndex(params.pathMatch)) {
      redirect(getPathWithoutTrailingIndex(params.pathMatch));
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      let content = await $content(params.pathMatch).fetch();

      if (Array.isArray(content)) {
        // params.pathMatch is a directory in content
        // try to find the index page
        content = content.find((page) => hasTrailingIndex(page.path));
      }

      if (!content) {
        // page is not found; throw error
        throw new Error(`${params.pathMatch} not found`);
      }

      return {
        content,
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
