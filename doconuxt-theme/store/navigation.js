import { NAVIGATION_CONFIG_PATH } from "../utils/constants";
import { getNonPrefixedRoute, slugToTitleCase } from "../utils/routeUtils";

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
  for (const { links } of linkGroups) {
    for (const link of links) {
      const path = getNonPrefixedRoute(link.path);
      const { slug, toc } = await $content(path).only(["slug", "toc"]).fetch();
      link.title = link.title || slugToTitleCase(slug);
      link.toc = toc.filter((data) => data.depth <= (link.toc ?? 2));
    }
  }
  return linkGroups;
}

function getRouteInformation(linkGroups) {
  const links = linkGroups
    .flatMap((group) => group.links)
    .map(({ path, title }) => {
      return { path, title };
    });

  const mapping = {};
  for (let i = 0; i < links.length; i++) {
    const prev = links[i - 1] ?? null;
    const next = links[i + 1] ?? null;

    const currentPath = links[i].path;
    mapping[currentPath] = { prev, next };
  }

  return mapping;
}

// TODO: add error checking and validation
export const actions = {
  async fetchNavigationData({ commit }) {
    const config = await this.$content(NAVIGATION_CONFIG_PATH).fetch();

    const linkGroups = await getLinkGroups(this.$content, config.sidenav);
    const routeInformation = getRouteInformation(linkGroups);

    commit("setLinkGroups", linkGroups);
    commit("setRouteInformation", routeInformation);
  },
};
