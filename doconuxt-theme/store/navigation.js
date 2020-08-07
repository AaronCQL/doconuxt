import { NAVIGATION_CONFIG_PATH } from "../utils/constants";
import { getNonPrefixedRoute } from "../utils/routeUtils";

export const state = () => ({
  linkGroups: [],
  routeInformation: {},
});

export const mutations = {
  setLinkGroups(state, linkGroups) {
    state.linkGroups = linkGroups;
  },
  setRouteInformation(state, routeInformation) {
    state.routeInformation = routeInformation;
  },
};

// TODO: add error checking and validation
export const actions = {
  async fetchNavigationData({ commit }) {
    const config = await this.$content(NAVIGATION_CONFIG_PATH).fetch();

    const linkGroups = config.sidenav;

    for (const { links } of linkGroups) {
      for (const link of links) {
        if (!link.title) {
          const path = getNonPrefixedRoute(link.path);
          const { title } = await this.$content(path).only("title").fetch();
          link.title = title;
        }
      }
    }

    commit("setLinkGroups", linkGroups);
  },
};
