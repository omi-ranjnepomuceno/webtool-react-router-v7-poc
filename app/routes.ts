import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/userProvider.ts", [
    layout("./layouts/AuthLayout.tsx", [
      route("login", "./routes/auth/login.tsx"),
    ]),
    layout("./layouts/DashboardLayout.tsx", [
      index("./routes/home/dashboard.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
