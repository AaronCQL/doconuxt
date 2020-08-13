<template>
  <div class="spoiler">
    <!-- TOOLBAR / TITLE -->
    <button
      v-if="title"
      aria-label="Toggle spoiler visibility"
      class="spoiler-header focus:outline-none w-full"
      :class="isVisible ? 'border-b' : 'opacity-75'"
      @click="isVisible = !isVisible"
    >
      <div class="flex w-full justify-between items-center p-2 space-x-2">
        <div class="font-semibold flex-1 text-left">
          {{ title }}
        </div>
        <component :is="icon" class="h-6 w-6" />
      </div>
    </button>

    <!-- CONTENT -->
    <div v-show="isVisible" class="spoiler-content">
      <slot />
    </div>
  </div>
</template>

<script>
import IconMinus from "../icons/IconMinus.vue";
import IconPlus from "../icons/IconPlus.vue";

export default {
  name: "Spoiler",
  props: {
    title: {
      type: String,
      default: "Spoiler",
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    icon() {
      return this.isVisible ? IconMinus : IconPlus;
    },
  },
};
</script>

<style lang="postcss" scoped>
.spoiler {
  @apply border rounded my-4;
  border-color: var(--border);
}

.spoiler-header {
  border-color: var(--border-secondary);
}

.spoiler-content {
  @apply p-2 bg-transparent;
  /* remove top/bot margins for first/last childs */
  & :first-child {
    @apply mt-0;
  }
  & :last-child {
    @apply mb-0;
  }
}
</style>
