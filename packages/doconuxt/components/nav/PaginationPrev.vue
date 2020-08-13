<template>
  <nuxt-link class="flex items-center" :to="route">
    <icon-arrow-left class="mr-1 w-4 h-4" />
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  name: "PaginationPrev",
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
