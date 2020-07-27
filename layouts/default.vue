<template>
  <div class="min-h-screen">
    <header
      class="z-50 sticky top-0 h-16 bg-white w-full px-4 lg:px-12 border-b border-gray-400 flex justify-between items-center"
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

    <nav
      class="nav z-40 flex-col fixed w-64 overflow-y-auto border-r bg-white p-2 space-y-1"
      :class="isNavOpen ? 'flex' : 'hidden md:flex'"
    >
      <nuxt-link
        v-for="link in navLinks"
        :key="link.title"
        class="cursor-pointer text-lg font-semibold hover:text-primary text-gray-800 w-full link-active"
        :to="link.path"
        @click.native="closeNav"
      >
        {{ link.title }}
      </nuxt-link>
    </nav>

    <Nuxt class="md:pl-64" />
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
.link-active.nuxt-link-exact-active {
  @apply text-green-700 bg-primary bg-opacity-10 rounded px-2;
}

.nav {
  height: calc(100vh - 4rem);
  top: 4rem;
}
</style>
