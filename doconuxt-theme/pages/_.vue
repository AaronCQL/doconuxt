<template>
  <article>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
import { isTrailingIndexRoute } from "../utils/routeUtils";

export default {
  async asyncData({ $content, params, error }) {
    try {
      let content = await $content(params.pathMatch).fetch();

      if (Array.isArray(content)) {
        // params.pathMatch is a directory in content
        // try to find the index page
        content = content.find((page) => isTrailingIndexRoute(page.path));
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
