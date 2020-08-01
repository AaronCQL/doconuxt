<template>
  <div class="alert" :class="`alert-${type}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "info",
      validator(value) {
        // The value must match one of these strings
        return ["info", "warning", "danger"].includes(value);
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.alert {
  @apply p-2 border rounded my-4;
  & p {
    @apply m-0;
  }
}

.alert-info {
  @apply bg-blue-100 border-blue-200 text-blue-700;
  & :not(pre) > code {
    @apply bg-blue-200;
  }
}

.alert-warning {
  @apply bg-orange-100 border-yellow-400 text-yellow-700;
  & :not(pre) > code {
    @apply bg-orange-200;
  }
}

.alert-danger {
  @apply bg-red-100 border-red-200 text-red-700;
  & :not(pre) > code {
    @apply bg-red-200;
  }
}
</style>
