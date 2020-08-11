<template>
  <div :class="`callout callout-${type}`">
    <p v-if="title" class="font-bold uppercase tracking-wider opacity-75">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Callout",
  props: {
    type: {
      type: String,
      default: "info",
      validator(value) {
        // The value must match one of these strings
        return ["info", "warning", "danger"].includes(value);
      },
    },
    title: {
      type: String,
      default: null,
      validator(value) {
        // The value must match one of these types
        return typeof value === "string";
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.callout {
  @apply p-2 my-4 border rounded;
  /* remove top/bot margins for first/last childs */
  & :first-child {
    @apply mt-0;
  }
  & :last-child {
    @apply mb-0;
  }
}

.callout-info {
  @apply bg-blue-100 border-blue-300 text-blue-900;
  & :not(pre) > code {
    @apply bg-blue-200 bg-opacity-75;
  }
  & a {
    @apply text-blue-700;
  }
}
.callout-warning {
  @apply bg-orange-100 border-yellow-500 text-yellow-900;
  & :not(pre) > code {
    @apply bg-orange-200 bg-opacity-75;
  }
  & a {
    @apply text-orange-700;
  }
}
.callout-danger {
  @apply bg-red-100 border-red-300 text-red-900;
  & :not(pre) > code {
    @apply bg-red-200 bg-opacity-75;
  }
  & a {
    @apply text-red-700;
  }
}

.dark-mode,
.black-mode {
  & .callout-info {
    @apply bg-blue-900 bg-opacity-50 border-blue-700 text-blue-100;
    & :not(pre) > code {
      @apply bg-blue-700 bg-opacity-50;
    }
    & a {
      @apply text-blue-300;
    }
  }
  & .callout-warning {
    @apply bg-yellow-600 bg-opacity-25 border-yellow-700 text-orange-100;
    & :not(pre) > code {
      @apply bg-yellow-800 bg-opacity-50;
    }
    & a {
      @apply text-orange-300;
    }
  }
  & .callout-danger {
    @apply bg-red-900 bg-opacity-50 border-red-700 text-red-100;
    & :not(pre) > code {
      @apply bg-red-800 bg-opacity-50;
    }
    & a {
      @apply text-red-300;
    }
  }
}
</style>
