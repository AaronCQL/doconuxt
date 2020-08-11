export default async function ({ store }) {
  // for static generation
  if (process.server) {
    await store.dispatch("navigation/fetchNavigationData");
    await store.dispatch("settings/fetchSettings");
  }

  // to support client side spa
  if (process.client && !store.state.navigation.linkGroups.length) {
    await store.dispatch("navigation/fetchNavigationData");
    await store.dispatch("settings/fetchSettings");
  }

  // for development HMR
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on("content:update", async () => {
        await store.dispatch("navigation/fetchNavigationData");
        await store.dispatch("settings/fetchSettings");
      });
    });
  }
}
