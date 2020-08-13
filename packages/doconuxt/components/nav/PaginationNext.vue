<template>
  <nuxt-link class="flex items-center" :to="route">
    {{ title }}
    <icon-arrow-right class="ml-1 w-4 h-4" />
  </nuxt-link>
</template>

<script>
export default {
  name: "PaginationNext",
  props: {
    route: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
