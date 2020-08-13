<template>
  <article>
    <nuxt-content class="content-container" :document="content" />
    <footer class="content-container my-12 space-y-4 border-t pt-4">
      <div class="opacity-75">Last updated: {{ updatedAt }}</div>
      <div class="grid grid-cols-2 text-primary font-semibold">
        <pagination-prev
          v-if="prev"
          v-bind="prev"
          class="col-start-1 justify-start"
        />
        <pagination-next
          v-if="next"
          v-bind="next"
          class="col-start-2 justify-end"
        />
      </div>
    </footer>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    const [content] = await $content("/", { deep: true })
      .where({ route: route.path })
      .fetch();

    if (!content) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    return {
      content,
    };
  },
  computed: {
    prev() {
      return this.$store.state.navigation.routeInformation?.[this.$route.path]
        ?.prev;
    },
    next() {
      return this.$store.state.navigation.routeInformation?.[this.$route.path]
        ?.next;
    },
    metaInfo() {
      return this.$store.state.settings.settings;
    },
    metaTitle() {
      return this.metaInfo.title
        ? this.content.route === "/"
          ? // let index page have site title
            this.metaInfo.title
          : `${this.content.title} | ${this.metaInfo.title}`
        : // let head defined in nuxt.config.js be default if no title is set
          undefined;
    },
    updatedAt() {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      // empty array for locale so that user's locale is automatically used
      return new Date(this.content.updatedAt).toLocaleString([], options);
    },
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.metaTitle },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.metaTitle,
        },
        // description
        {
          hid: "description",
          name: "description",
          content: this.metaInfo.description,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.content-container {
  @apply px-4 max-w-3xl mx-auto;
}
</style>
