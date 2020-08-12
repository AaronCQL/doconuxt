<template>
  <article>
    <nuxt-content ref="nuxt-content" :document="content" />
    <footer class="nuxt-content flex justify-between items-center h-16">
      <div>
        <nuxt-link v-if="prev" class="flex items-center" :to="prev.route">
          <icon-arrow-left class="mr-1 w-4 h-4" />
          {{ prev.title }}
        </nuxt-link>
      </div>
      <div>
        <nuxt-link v-if="next" class="flex items-center" :to="next.route">
          {{ next.title }}
          <icon-arrow-right class="ml-1 w-4 h-4" />
        </nuxt-link>
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
