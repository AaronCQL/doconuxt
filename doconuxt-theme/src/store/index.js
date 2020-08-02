export const state = () => ({
  navLinks: [],
});

export const mutations = {
  setNavLinks(state, navLinks) {
    state.navLinks = navLinks;
  },
};

export const actions = {
  async fetchNavLinks({ commit }) {
    const navLinks = await this.$content("/").only(["title", "path"]).fetch();
    commit("setNavLinks", navLinks);
  },
};
