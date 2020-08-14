<template>
  <div class="flex-1 flex items-center justify-start">
    <nuxt-link class="flex items-center" :to="route">
      <icon-arrow-left class="flex-none mr-2 w-4 h-4" />
      {{ title }}
    </nuxt-link>
  </div>
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
