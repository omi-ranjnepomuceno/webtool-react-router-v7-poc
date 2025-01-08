import type { Route } from "./+types/AuthLayout";
import { Outlet, redirect } from "react-router";
import { getAuthToken } from "~/features/auth/utils.server";

export async function loader({ request }: Route.LoaderArgs) {
  const authToken = await getAuthToken(request);
  if (authToken) {
    return redirect("/");
  }
  return !!authToken;
}

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EFF5F8] p-4 lg:p-16">
      <Outlet />
    </div>
  );
}
