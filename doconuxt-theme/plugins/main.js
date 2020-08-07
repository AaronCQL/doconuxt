export default async function ({ store }) {
  // for static generation
  if (process.server) {
    await store.dispatch("navigation/fetchNavigationData");
  }

  // to support client side spa
  if (process.client && !store.state.sidenav.linkGroups.length) {
    await store.dispatch("navigation/fetchNavigationData");
  }

  // for development HMR
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on("content:update", async () => {
        await store.dispatch("navigation/fetchNavigationData");
      });
    });
  }
}
