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
        Nuxt Content Docs Template
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
        class="z-40 h-full flex-col fixed w-64 overflow-y-auto border-r p-2 space-y-1"
        :class="isNavOpen ? 'flex' : 'hidden md:flex'"
      >
        <nuxt-link
          v-for="link in navLinks"
          :key="link.title"
          class="cursor-pointer text-lg font-semibold hover:text-primary w-full link-active"
          :to="link.path"
          @click.native="closeNav"
        >
          {{ link.title }}
        </nuxt-link>
      </nav>

      <Nuxt class="md:pl-64" />
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
    navLinks() {
      return this.$store.state.navLinks;
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
  @apply text-primary;
}
</style>
