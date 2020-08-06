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
        class="z-40 h-full flex-col fixed w-72 overflow-y-auto border-r p-3 space-y-6"
        :class="isNavOpen ? 'flex' : 'hidden md:flex'"
      >
        <div v-for="(linkGroup, idx) in linkGroups" :key="idx">
          <h1
            v-if="linkGroup.category"
            class="opacity-50 uppercase tracking-wider"
          >
            {{ linkGroup.category }}
          </h1>
          <nuxt-link
            v-for="link in linkGroup.links"
            :key="link.path"
            class="block px-2 py-1 leading-relaxed font-semibold cursor-pointer hover:text-primary w-full link-active truncate"
            :to="link.path"
            @click.native="closeNav"
          >
            {{ link.title }}
          </nuxt-link>
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
      return this.$store.state.sidenav.linkGroups;
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
  /* // TODO: remove hard-coded bg-green-400 class */
  @apply text-primary bg-green-400 bg-opacity-10 rounded;
}
</style>
