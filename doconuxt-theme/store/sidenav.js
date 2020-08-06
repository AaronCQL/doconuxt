import { SIDENAV_CONFIG_PATH } from "../utils/constants";
import { getNonPrefixedRoute } from "../utils/routeUtils";

export const state = () => ({
  linkGroups: [],
});

export const mutations = {
  setLinkGroups(state, linkGroups) {
    state.linkGroups = linkGroups;
  },
};

// TODO: add error checking and validation
export const actions = {
  async fetchLinkGroups({ commit }) {
    const config = await this.$content(SIDENAV_CONFIG_PATH).fetch();
    delete config.dir;
    delete config.slug;
    delete config.path;
    delete config.extension;
    delete config.title;
    delete config.description;
    delete config.createdAt;
    delete config.updatedAt;

    // convert to array
    const linkGroups = Object.values(config);

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
