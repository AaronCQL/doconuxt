export default async function ({ store }) {
  if (process.server) {
    await store.dispatch("fetchNavLinks");
  }

  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on("content:update", () => store.dispatch("fetchNavLinks"));
    });
  }
}
