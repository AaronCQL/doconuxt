import { NAVIGATION_CONFIG_PATH } from "../utils/constants";

export const state = () => ({
  linkGroups: [], // to generate sidebar links
  routeInformation: {}, // mapping of route to route information (title, )
});

export const mutations = {
  setLinkGroups(state, linkGroups) {
    state.linkGroups = linkGroups;
  },
  setRouteInformation(state, routeInformation) {
    state.routeInformation = routeInformation;
  },
};

async function getLinkGroups($content, linkGroups) {
  if (!linkGroups || !linkGroups.length) {
    return;
  }

  for (const { links } of linkGroups) {
    for (const link of links) {
      const [content] = await $content("/", { deep: true })
        .where({ route: link.route })
        .only(["title", "toc"])
        .fetch();

      if (!content) {
        // eslint-disable-next-line no-console
        console.warn(
          `_config/navigation.json(5): the page route "${link.route}" does not yet exist. Please create the file in the appropriate location within content/.`
        );
        return [];
      }

      const { title, toc } = content;
      link.title = link.title || title;
      link.toc = toc.filter(
        (data) => data.depth <= (Number.isInteger(link.toc) ? link.toc : 2)
      );
    }
  }
  return linkGroups;
}

function getRouteInformation(linkGroups) {
  if (!linkGroups || !linkGroups.length) {
    return {};
  }

  const links = linkGroups
    .flatMap((group) => group.links)
    .map(({ route, title }) => {
      return { route, title };
    });

  const mapping = {};
  for (let i = 0; i < links.length; i++) {
    const prev = links[i - 1] || null;
    const next = links[i + 1] || null;

    const currentRoute = links[i].route;
    mapping[currentRoute] = { prev, next };
  }

  return mapping;
}

// TODO: add error checking and validation
export const actions = {
  async fetchNavigationData({ commit }) {
    try {
      const config = await this.$content(NAVIGATION_CONFIG_PATH).fetch();

      const linkGroups = await getLinkGroups(this.$content, config.sidenav);
      const routeInformation = getRouteInformation(linkGroups);

      commit("setLinkGroups", linkGroups);
      commit("setRouteInformation", routeInformation);
    } catch (error) {
      // navigation.json not found; warn user
      // eslint-disable-next-line no-console
      console.warn("_config/navigation.json(5): file not found");
    }
  },
};
