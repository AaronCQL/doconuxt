import { SETTINGS_CONFIG_PATH } from "../utils/constants";

export const state = () => ({
  settings: {},
});

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings;
  },
};

export const actions = {
  async fetchSettings({ commit }) {
    const settings = await this.$content(SETTINGS_CONFIG_PATH).fetch();

    commit("setSettings", settings);
  },
};
