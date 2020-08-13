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
    try {
      const settings = await this.$content(SETTINGS_CONFIG_PATH).fetch();

      commit("setSettings", settings);
    } catch (error) {
      // settings.json not found; warn user
      // eslint-disable-next-line no-console
      console.warn("_config/settings.json(5): file not found");
    }
  },
};
