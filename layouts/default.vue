<template>
  <div>
    <!-- NAV HEADER -->
    <nav
      class="z-50 bg-white w-full h-16 px-4 lg:px-12 border-b border-gray-400 flex justify-between items-center"
    >
      <nuxt-link
        class="cursor-pointer text-2xl font-bold hover:text-primary"
        to="/"
      >
        Nuxt Content Docs Template
      </nuxt-link>
      <div>
        <input
          class="bg-gray-200 py-1 px-2 text-lg rounded-md focus:outline-primary hidden lg:block"
          placeholder="Search text"
          type="text"
        />
        <button
          title="Toggle Navigation"
          class="lg:hidden focus:outline-none px-4 py-2 text-xl hover:text-primary"
          @click="toggleNav"
        >
          <font-awesome-icon v-if="isNavOpen" icon="times" />
          <font-awesome-icon v-else icon="bars" />
        </button>
      </div>
    </nav>

    <!-- BODY -->
    <div class="flex h-screen content-max-height overflow-y-hidden">
      <nav
        class="z-40 bg-white fixed lg:static max-h-full w-screen lg:w-3/12 lg:max-w-xs overflow-y-auto lg:border-r p-4 flex-col shadow-lg lg:shadow-none space-y-1"
        :class="isNavOpen ? 'flex' : 'hidden lg:flex'"
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

      <!-- NUXT CONTENT -->
      <Nuxt class="flex-1 overflow-y-auto" />
    </div>
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
.content-max-height {
  max-height: calc(100vh - 4rem);
}
</style>
