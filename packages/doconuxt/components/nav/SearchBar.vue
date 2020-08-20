<template>
  <div class="relative">
    <input
      v-model="query"
      class="w-full border-b border rounded p-2 input-bg focus:border-primary focus:outline-none"
      type="search"
      placeholder="Search"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div
      v-if="content.length > 0 && focus"
      class="fixed arrow-box z-50 w-64 md:w-1/2 max-w-md mt-2 border border-primary rounded shadow-md overflow-y-auto divide-y"
    >
      <div id="arrow-pointer"></div>
      <nuxt-link
        v-for="article of content"
        :key="article.route"
        :to="article.route"
        class="p-2 search-list block truncate w-full"
      >
        <span class="font-bold">
          {{ article.title }}
        </span>
        <span v-for="header in article.toc" :key="header.id">
          &nbsp;&rsaquo;&nbsp;{{ header.text }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { USER_CONFIG_DIR } from "../../utils/constants";

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
      content: [],
      focus: false,
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.content = [];
        return;
      }

      const content = await this.$content("/", { deep: true })
        .where({ dir: { $ne: USER_CONFIG_DIR } })
        .only(["title", "route", "toc"])
        .limit(8)
        .search(query)
        .fetch();

      this.content = content.map((article) => {
        return {
          title: article.title,
          route: article.route,
          toc: article.toc.filter((header) =>
            header.text.toLowerCase().includes(query.toLowerCase())
          ),
        };
      });
    },
  },
  methods: {
    onFocus() {
      setTimeout(() => (this.focus = true), 100);
    },
    onBlur() {
      setTimeout(() => (this.focus = false), 100);
    },
  },
};
</script>

<style lang="postcss" scoped>
input {
  border-color: var(--border);
  background-color: var(--bg-secondary);
}

.search-list {
  border-color: var(--border);
  background-color: var(--bg-secondary);
}

#arrow-pointer {
  @apply fixed border-8 bg-transparent border-transparent z-40 -mt-4 ml-10;
  border-bottom-color: var(--primary);
}
</style>
