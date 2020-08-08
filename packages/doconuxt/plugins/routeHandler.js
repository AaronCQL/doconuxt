import {
  isTrailingIndexRoute,
  getRouteWithoutTrailingIndex,
  getRouteWithoutTrailingSlash,
  isTrailingSlashRoute,
} from "../utils/routeUtils";

export default function ({ redirect, route }) {
  if (route.path === "/") {
    return;
  }

  // redirects all url with trailing `xxx/index` or `xxx/index/` to `xxx`
  if (isTrailingIndexRoute(route.path)) {
    return redirect(getRouteWithoutTrailingIndex(route.path) + route.hash);
  }

  // redirects all url with trailing `/` to without trailing `/`
  if (isTrailingSlashRoute(route.path)) {
    return redirect(getRouteWithoutTrailingSlash(route.path) + route.hash);
  }
}
