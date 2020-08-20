<template>
  <a
    class="p-2 rounded hover:text-primary focus:outline-none focus:shadow-outline"
    aria-label="GitHub repository"
    :href="`https://github.com/${githubRepo}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    <icon-github class="w-6 h-6" />
  </a>
</template>

<script>
export default {
  name: "GithubLink",
  props: {
    githubRepo: {
      type: String,
      default: null,
    },
  },
};
</script>
