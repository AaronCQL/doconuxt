export default async function ({ store }) {
  // for static generation
  if (process.server) {
    await store.dispatch("sidenav/fetchLinkGroups");
  }

  // to support client side spa
  if (process.client && !store.state.sidenav.linkGroups.length) {
    await store.dispatch("sidenav/fetchLinkGroups");
  }

  // for development HMR
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on("content:update", () =>
        store.dispatch("sidenav/fetchLinkGroups")
      );
    });
  }
}
