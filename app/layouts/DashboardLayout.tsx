import type { Route } from "./+types/DashboardLayout";
import { Outlet, redirect } from "react-router";
import { getAuthToken } from "~/features/auth/utils";

export async function loader({ request }: Route.LoaderArgs) {
  const authToken = await getAuthToken(request);
  if (!authToken) {
    return redirect("/login");
  }
  return !!authToken;
}

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
