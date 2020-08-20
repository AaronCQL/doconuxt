<template>
  <button
    class="p-2 rounded hover:text-primary focus:outline-none focus:shadow-outline"
    aria-label="Toggle side navigation"
    @click="$emit('toggle-sidenav')"
  >
    <icon-menu v-if="!isNavOpen" class="w-6 h-6" />
    <icon-x v-else class="w-6 h-6" />
  </button>
</template>

<script>
export default {
  name: "SidenavToggler",
  props: {
    isNavOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
