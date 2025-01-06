import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/ApolloClientProvider.tsx", [
    layout("./layouts/UserProvider.tsx", [
      layout("./layouts/AuthLayout.tsx", [
        route("login", "./routes/auth/login.tsx"),
      ]),
      layout("./layouts/DashboardLayout.tsx", [
        index("./routes/home/dashboard.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
