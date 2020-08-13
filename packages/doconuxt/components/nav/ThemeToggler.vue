<template>
  <button
    class="p-2 focus:outline-none"
    aria-label="Toggle theme"
    @click="$colorMode.preference = nextTheme"
  >
    <icon-sun v-if="theme === 'light'" class="h-6 w-6" />
    <icon-moon v-else class="h-6 w-6" />
  </button>
</template>

<script>
export default {
  name: "ThemeToggler",
  computed: {
    theme() {
      return this.$colorMode.value;
    },
    nextTheme() {
      if (this.theme === "light") {
        return "dark";
      } else {
        return "light";
      }
    },
  },
};
</script>

<style></style>
