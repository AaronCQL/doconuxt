<template>
  <article>
    <nuxt-content ref="nuxt-content" :document="content" />
    <footer class="nuxt-content flex justify-between items-center h-16">
      <div>
        <nuxt-link v-if="prev" :to="prev.route">
          &larr; {{ prev.title }}
        </nuxt-link>
      </div>
      <div>
        <nuxt-link v-if="next" :to="next.route">
          {{ next.title }} &rarr;
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
