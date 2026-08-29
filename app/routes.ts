import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("shared/layout/default.tsx", [index("routes/me.tsx"), route("/skills", "routes/skills.tsx")]),
] satisfies RouteConfig;
