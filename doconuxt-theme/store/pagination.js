export const state = () => ({
  nextPrevMapping: {},
});

export const mutations = {
  setNextPrevMapping(state, nextPrevMapping) {
    state.nextPrevMapping = nextPrevMapping;
  },
};

export const actions = {
  fetchNextPrevMappings({ rootState, commit }) {
    const linkGroups = rootState.sidenav.linkGroups;

    const links = linkGroups.flatMap((group) => group.links);

    const mapping = {};
    for (let i = 0; i < links.length; i++) {
      const prev = links[i - 1] ?? null;
      const currentPath = links[i].path;
      const next = links[i + 1] ?? null;
      mapping[currentPath] = [prev, next];
    }
    console.log(mapping);
    commit("setNextPrevMapping", mapping);
  },
};
