import {
  isTrailingIndexRoute,
  getRouteWithoutTrailingIndex,
} from "../utils/routeUtils";

export default function ({ params, redirect }) {
  // redirects all url with trailing `xxx/index` or `xxx/index/` to `xxx`
  if (isTrailingIndexRoute(params.pathMatch)) {
    redirect(getRouteWithoutTrailingIndex(params.pathMatch));
  }
}
