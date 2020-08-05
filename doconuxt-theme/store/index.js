export const state = () => ({
  navLinks: [],
});

export const mutations = {
  setNavLinks(state, navLinks) {
    state.navLinks = navLinks;
  },
};

// TODO: add error checking and validation
export const actions = {
  async fetchNavLinks({ commit }) {
    const sidenav = await this.$content("_config/sidenav").fetch();
    const navLinks = [];
    for (const [idx, linkGroup] of Object.entries(sidenav)) {
      if (isNaN(parseInt(idx))) {
        break;
      }
      navLinks.push(linkGroup);
    }
    commit("setNavLinks", navLinks);
  },
};
