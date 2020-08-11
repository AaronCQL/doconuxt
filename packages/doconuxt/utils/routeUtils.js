const TRAILING_INDEX_REGEX = /\/index\/?$/;

/**
 * Checks and returns a route guaranteed to have the `/` prefix
 *
 * @param {string} route the route to check and correct
 * @returns {string} a new route guaranteed to have the `/` prefix
 */
function getSlashPrefixedRoute(route) {
  return route.charAt(0) === "/" ? route : "/" + route;
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

  const prefixedRoute = getSlashPrefixedRoute(route);

  return !!prefixedRoute.match(TRAILING_INDEX_REGEX);
}

/**
 * Return true iff `route` has a trailing `/`.
 *
 * @param {string} route the route string to test
 * @returns {boolean} true iff `route` has a trailing `/`
 */
function isTrailingSlashRoute(route) {
  if (typeof route !== "string") {
    throw new TypeError("Argument route is not of type string");
  }

  return route.slice(-1) === "/";
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

  const prefixedRoute = getSlashPrefixedRoute(route);
  // this might result in "" if `prefixedRoute` is "/index"
  const withoutTrailingIndex = prefixedRoute.replace(TRAILING_INDEX_REGEX, "");
  // make sure returned route has `/` prefix
  return getSlashPrefixedRoute(withoutTrailingIndex);
}

/**
 * Returns a new route with the `/` prefix, and without the trailing `/`.
 *
 * @param {string} route the base route string
 * @returns {string} a new route with the `/` prefix, and without the trailing `/`
 */
function getRouteWithoutTrailingSlash(route) {
  if (typeof route !== "string") {
    throw new TypeError("Argument route is not of type string");
  }

  if (!isTrailingSlashRoute(route)) {
    return getSlashPrefixedRoute(route);
  }

  return getSlashPrefixedRoute(route.slice(0, -1));
}

export {
  TRAILING_INDEX_REGEX,
  isTrailingIndexRoute,
  getRouteWithoutTrailingIndex,
  isTrailingSlashRoute,
  getRouteWithoutTrailingSlash,
};
