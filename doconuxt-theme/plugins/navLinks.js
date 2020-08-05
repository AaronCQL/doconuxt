export default async function ({ store }) {
  // for static generation
  if (process.server) {
    await store.dispatch("fetchNavLinks");
  }

  // to support client side spa
  if (process.client && !store.state.navLinks.length) {
    await store.dispatch("fetchNavLinks");
  }

  // for development HMR
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on("content:update", () => store.dispatch("fetchNavLinks"));
    });
  }
}
