<template>
  <div class="flex flex-col justify-center items-center h-64">
    <h3 class="text-4xl md:text-5xl mb-4">{{ error.message }}</h3>
    <nuxt-link class="text-xl md:text-2xl font-semibold text-primary" to="/">
      Go back home &rarr;
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
