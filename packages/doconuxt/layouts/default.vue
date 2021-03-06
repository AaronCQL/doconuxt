<template>
  <div class="min-h-screen">
    <header
      style="border-color: var(--border);"
      class="z-50 fixed top-0 h-16 w-full px-4 border-b flex justify-between items-center"
    >
      <nuxt-link
        class="cursor-pointer text-2xl font-bold hover:text-primary"
        to="/"
      >
        {{ title }}
      </nuxt-link>
      <div class="flex items-center">
        <theme-toggler />
        <github-link v-if="githubRepo" :github-repo="githubRepo" />
        <sidenav-toggler
          class="md:hidden"
          :is-nav-open="isNavOpen"
          @toggle-sidenav="toggleNav"
        />
      </div>
    </header>

    <main class="pt-16">
      <nav
        style="border-color: var(--border);"
        class="z-40 nav-height flex-col fixed w-72 overflow-y-auto border-r p-4 space-y-8"
        :class="isNavOpen ? 'flex' : 'hidden md:flex'"
      >
        <search-bar />
        <div
          v-for="(linkGroup, idx) in linkGroups"
          :key="idx"
          class="space-y-1"
        >
          <h1
            v-if="linkGroup.category"
            class="uppercase tracking-wider opacity-50 text-sm"
          >
            {{ linkGroup.category }}
          </h1>
          <div v-for="link in linkGroup.links" :key="link.route">
            <nuxt-link
              :class="{
                'text-primary font-semibold': link.route === currentRoute,
              }"
              class="block text-lg cursor-pointer hover:text-primary w-full truncate"
              :to="link.route"
              @click.native="closeNav"
            >
              {{ link.title }}
            </nuxt-link>
            <scrollactive
              v-if="link.route === currentRoute"
              :offset="1"
              :scroll-offset="0"
            >
              <a
                v-for="tocLink of link.toc"
                :key="tocLink.id"
                :href="`#${tocLink.id}`"
                class="scrollactive-item block hover:text-primary hover:opacity-100 opacity-75 mt-1"
                :class="tocLink.depth === 2 ? 'pl-4' : 'pl-8'"
              >
                {{ tocLink.text }}
              </a>
            </scrollactive>
            <nuxt-link
              v-for="tocLink of link.toc"
              v-else-if="link.persistentToc"
              :key="tocLink.id"
              class="block hover:text-primary hover:opacity-100 opacity-75 mt-1"
              :class="tocLink.depth === 2 ? 'pl-4' : 'pl-8'"
              :to="`${link.route}#${tocLink.id}`"
            >
              {{ tocLink.text }}
            </nuxt-link>
          </div>
        </div>
      </nav>

      <Nuxt class="md:pl-72" @click.native="closeNav" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  computed: {
    linkGroups() {
      return this.$store.state.navigation.linkGroups;
    },
    currentRoute() {
      return this.$route.path;
    },
    githubRepo() {
      return this.$store.state.settings.settings.github;
    },
    title() {
      return this.$store.state.settings.settings.title || "Doconuxt";
    },
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
};
</script>

<style lang="postcss">
.nav-height {
  height: calc(100% - 4rem);
}

.is-active {
  @apply text-primary font-semibold opacity-100;
}
</style>
