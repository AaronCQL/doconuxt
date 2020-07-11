<template>
  <div class="h-screen">
    <!-- NAV HEADER -->
    <nav
      class="fixed top-0 left-0 w-full h-16 px-10 border-b border-gray-400 flex justify-between items-center"
    >
      <nuxt-link
        class="cursor-pointer text-2xl font-bold hover:text-primary text-gray-800"
        to="/"
      >
        Nuxt Content Docs Template
      </nuxt-link>
      <div>
        <input
          class="bg-gray-200 py-1 px-2 text-lg rounded-md focus:outline-primary"
          placeholder="Search text"
          type="text"
        />
      </div>
    </nav>

    <!-- BODY -->
    <div class="flex overflow-y-hidden h-full pt-16">
      <nav class="flex-none w-84 overflow-y-auto border-r p-4">
        <ul>
          <nuxt-link
            v-for="article in articles"
            :key="article.title"
            class="cursor-pointer text-lg font-semibold hover:text-primary text-gray-800"
            :to="article.path"
          >
            <li>
              {{ article.title }}
            </li>
          </nuxt-link>
        </ul>
      </nav>
      <Nuxt class="flex-1 overflow-y-auto" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    // TODO: use vuex store instead to support creating/deleting md files in dev mode
    this.articles = await this.$content("/").only(["title", "path"]).fetch();
  },
};
</script>

<style></style>
