<template>
  <button class="text-xl py-1 px-2" @click="$colorMode.preference = nextTheme">
    <font-awesome-icon :icon="faIcon" />
  </button>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  computed: {
    theme() {
      return this.$colorMode.value;
    },
    nextTheme() {
      if (this.theme === "light") {
        return "dark";
      } else if (this.theme === "dark") {
        return "black";
      }
      return "light";
    },
    faIcon() {
      if (this.theme === "light") {
        return "sun";
      } else if (this.theme === "dark") {
        return "moon";
      }
      return "code";
    },
  },
};
</script>

<style></style>
