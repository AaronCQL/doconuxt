<template>
  <div class="min-h-screen">
    <header
      style="border-color: var(--border);"
      class="z-50 fixed top-0 h-16 w-full px-4 lg:px-12 border-b flex justify-between items-center"
    >
      <nuxt-link
        class="cursor-pointer text-2xl font-bold hover:text-primary"
        to="/"
      >
        Doconuxt
      </nuxt-link>
      <div>
        <!-- <input
          class="bg-gray-200 py-1 px-2 text-lg rounded-md focus:outline-primary hidden lg:block"
          placeholder="Search text"
          type="text"
        /> -->
        <theme-switcher></theme-switcher>
        <button
          title="Toggle Navigation"
          class="md:hidden focus:outline-none px-4 py-2 text-xl hover:text-primary"
          @click="toggleNav"
        >
          <font-awesome-icon v-if="isNavOpen" icon="times" />
          <font-awesome-icon v-else icon="bars" />
        </button>
      </div>
    </header>

    <main class="pt-16">
      <nav
        style="border-color: var(--border);"
        class="z-40 nav-height flex-col fixed w-72 overflow-y-auto border-r p-4 space-y-8"
        :class="isNavOpen ? 'flex' : 'hidden md:flex'"
      >
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
          <div v-for="link in linkGroup.links" :key="link.path">
            <nuxt-link
              class="block text-lg cursor-pointer hover:text-primary w-full link-active truncate"
              :to="link.path"
              @click.native="closeNav"
            >
              {{ link.title }}
            </nuxt-link>
            <nuxt-link
              v-for="tocLink of link.toc"
              v-show="link.path === currentPath"
              :key="tocLink.id"
              class="block hover:text-primary opacity-75 mt-1"
              :class="tocLink.depth === 2 ? 'pl-4' : 'pl-8'"
              :to="`${link.path}#${tocLink.id}`"
            >
              {{ tocLink.text }}
            </nuxt-link>
          </div>
        </div>
      </nav>

      <Nuxt class="md:pl-72" />
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
    currentPath() {
      return this.$route.path;
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
.link-active.nuxt-link-active {
  @apply text-primary font-semibold;
}

.nav-height {
  height: calc(100% - 4rem);
}
</style>
