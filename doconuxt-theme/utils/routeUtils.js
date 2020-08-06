const TRAILING_INDEX_REGEX = /\/index\/?$/;

/**
 * Checks and returns a route guaranteed to have the `/` prefix
 *
 * @param {string} route the route to check and correct
 * @returns {string} a new route guaranteed to have the `/` prefix
 */
function getPrefixedRoute(route) {
  return route.charAt(0) === "/" ? route : "/" + route;
}

/**
 * Checks and returns a route guaranteed to not have the `/` prefix
 *
 * @param {string} route the route to check and correct
 * @returns {string} a new route guaranteed to not have the `/` prefix
 */
function getNonPrefixedRoute(route) {
  return route.charAt(0) === "/" ? route.substring(1) : route;
}

/**
 * Return true iff `route` has a trailing `/index` or `/index/`.
 *
 * @param {string} route the route string to test
 * @returns {boolean} true iff `route` has a trailing `/index`
 */
function isTrailingIndexRoute(route) {
  if (typeof route !== "string") {
    throw new TypeError("Argument route is not of type string");
  }

  const prefixedRoute = getPrefixedRoute(route);

  return !!prefixedRoute.match(TRAILING_INDEX_REGEX);
}

/**
 * Returns a new route with the `/` prefix, and without the trailing `/index`.
 *
 * @param {string} route the base route string
 * @returns {string} a new route with the `/` prefix, and without the trailing `/index`
 */
function getRouteWithoutTrailingIndex(route) {
  if (typeof route !== "string") {
    throw new TypeError("Argument route is not of type string");
  }

  const prefixedRoute = getPrefixedRoute(route);
  // this might result in "" if `prefixedRoute` is "/index"
  const withoutTrailingIndex = prefixedRoute.replace(TRAILING_INDEX_REGEX, "");
  // make sure returned route has `/` prefix
  return getPrefixedRoute(withoutTrailingIndex);
}

export {
  TRAILING_INDEX_REGEX,
  getNonPrefixedRoute,
  isTrailingIndexRoute,
  getRouteWithoutTrailingIndex,
};
