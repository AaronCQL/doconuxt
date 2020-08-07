<template>
  <article>
    <nuxt-content ref="nuxt-content" :document="content" />
    <footer class="nuxt-content flex justify-between items-center h-16">
      <div>
        <nuxt-link v-if="prev" :to="prev.path">
          &larr; {{ prev.title }}
        </nuxt-link>
      </div>
      <div>
        <nuxt-link v-if="next" :to="next.path">
          {{ next.title }} &rarr;
        </nuxt-link>
      </div>
    </footer>
  </article>
</template>

<script>
import { isTrailingIndexRoute } from "../utils/routeUtils";

/**
 * Manually prepends the yaml title as an H1 element.
 */
function prependContentTitle({ body, title }) {
  const h1Child = {
    type: "element",
    tag: "h1",
    props: {},
    children: [
      {
        type: "text",
        value: title,
      },
    ],
  };
  body.children.unshift(h1Child);
}

export default {
  async asyncData({ $content, params, error, store }) {
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

      prependContentTitle(content);

      return {
        content,
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return error({ statusCode: 404, message: err.message });
    }
  },
  computed: {
    prev() {
      return this.$store.state.navigation.routeInformation[this.$route.path]
        ?.prev;
    },
    next() {
      return this.$store.state.navigation.routeInformation[this.$route.path]
        ?.next;
    },
  },
};
</script>
