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
      <nav class="w-3/12 max-w-xs overflow-y-auto border-r p-4 flex flex-col">
        <nuxt-link
          v-for="link in navLinks"
          :key="link.title"
          class="cursor-pointer text-lg font-semibold hover:text-primary text-gray-800 w-full"
          :to="link.path"
        >
          {{ link.title }}
        </nuxt-link>
      </nav>
      <Nuxt class="flex-1 overflow-y-auto" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    navLinks() {
      return this.$store.state.navLinks;
    },
  },
};
</script>

<style lang="postcss">
.nuxt-link-exact-active {
  @apply text-green-700 bg-primary bg-opacity-10 rounded px-2;
}
</style>
