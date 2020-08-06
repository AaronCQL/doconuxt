const TRAILING_INDEX_REGEX = /\/index\/?$/;

/**
 * Checks and returns a path guaranteed to have the `/` prefix
 *
 * @param {string} path the path to check and correct
 * @returns {string} a new path guaranteed to have the `/` prefix
 */
function getCorrectPath(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

/**
 * Return true iff `path` has a trailing `/index` or `/index/`.
 *
 * @param {string} path the path string to test
 * @returns {boolean} true iff `path` has a trailing `/index`
 */
function hasTrailingIndex(path) {
  if (typeof path !== "string") {
    throw new TypeError("Argument path is not of type string");
  }

  const correctPath = getCorrectPath(path);

  return !!correctPath.match(TRAILING_INDEX_REGEX);
}

/**
 * Returns a new path with the `/` prefix, and without the trailing `/index`.
 *
 * @param {string} path the base path string
 * @returns {string} a new string without the trailing `/index`
 */
function getPathWithoutTrailingIndex(path) {
  if (typeof path !== "string") {
    throw new TypeError("Argument path is not of type string");
  }

  const correctPath = getCorrectPath(path);
  // this might result in "" if `correctPath` is "/index"
  const withoutTrailingIndex = correctPath.replace(TRAILING_INDEX_REGEX, "");
  // make sure returned path has `/` prefix
  return getCorrectPath(withoutTrailingIndex);
}

export { TRAILING_INDEX_REGEX, hasTrailingIndex, getPathWithoutTrailingIndex };
