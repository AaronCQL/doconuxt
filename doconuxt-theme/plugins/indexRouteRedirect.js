import {
  isTrailingIndexRoute,
  getRouteWithoutTrailingIndex,
  getRouteWithoutTrailingSlash,
  isTrailingSlashRoute,
} from "../utils/routeUtils";

export default function ({ params, redirect }) {
  // redirects all url with trailing `xxx/index` or `xxx/index/` to `xxx`
  if (isTrailingIndexRoute(params.pathMatch)) {
    return redirect(getRouteWithoutTrailingIndex(params.pathMatch));
  }

  // redirects all url with trailing `/` to without trailing `/`
  if (isTrailingSlashRoute(params.pathMatch)) {
    return redirect(getRouteWithoutTrailingSlash(params.pathMatch));
  }
}
