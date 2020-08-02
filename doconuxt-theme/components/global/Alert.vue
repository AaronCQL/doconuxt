<template>
  <div :class="`alert alert-${type}`">
    <p v-if="title" class="font-bold uppercase tracking-wider opacity-75">
      {{ computedTitle }}
    </p>
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
    title: {
      type: [Boolean, String],
      default: false,
      validator(value) {
        // The value must match one of these types
        return typeof value === "boolean" || typeof value === "string";
      },
    },
  },
  computed: {
    computedTitle() {
      return typeof this.title === "boolean" ? this.type : this.title;
    },
  },
};
</script>

<style lang="postcss" scoped>
.alert {
  @apply p-2 my-4 border rounded;
  /* remove top/bot margins for first/last childs */
  & :first-child {
    @apply mt-0;
  }
  & :last-child {
    @apply mb-0;
  }
}

.alert-info {
  @apply bg-blue-100 border-blue-300 text-blue-800;
  & :not(pre) > code {
    @apply bg-blue-200 bg-opacity-75;
  }
}
.alert-warning {
  @apply bg-orange-100 border-yellow-500 text-yellow-800;
  & :not(pre) > code {
    @apply bg-orange-200 bg-opacity-75;
  }
}
.alert-danger {
  @apply bg-red-100 border-red-300 text-red-800;
  & :not(pre) > code {
    @apply bg-red-200 bg-opacity-75;
  }
}

.dark-mode,
.black-mode {
  & .alert-info {
    @apply bg-blue-900 bg-opacity-75 border-blue-700 text-blue-200;
    & :not(pre) > code {
      @apply bg-blue-700 bg-opacity-50;
    }
  }
  & .alert-warning {
    @apply bg-yellow-600 bg-opacity-25 border-yellow-700 text-orange-200;
    & :not(pre) > code {
      @apply bg-yellow-800 bg-opacity-50;
    }
  }
  & .alert-danger {
    @apply bg-red-900 bg-opacity-50 border-red-700 text-red-200;
    & :not(pre) > code {
      @apply bg-red-800 bg-opacity-50;
    }
  }
}
</style>
