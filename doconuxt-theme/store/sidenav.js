import { SIDENAV_CONFIG_PATH } from "../utils/constants";

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

    const linkGroups = Object.values(config);
    commit("setLinkGroups", linkGroups);
  },
};
