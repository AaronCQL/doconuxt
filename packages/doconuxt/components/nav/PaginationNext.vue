<template>
  <div class="flex-1 flex items-center justify-end">
    <nuxt-link class="flex items-center" :to="route">
      {{ title }}
      <icon-arrow-right class="flex-none ml-2 w-4 h-4" />
    </nuxt-link>
  </div>
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
