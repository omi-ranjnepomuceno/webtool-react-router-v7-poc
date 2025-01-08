import type { Route } from "./+types/dashboard";
import { Form, useRouteLoaderData } from "react-router";
import { logout } from "~/features/auth/utils.server";
import type { User } from "~/types/User";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const action = formData.get("action");

  if (action === "logout") {
    return await logout();
  }
}

export default function Home() {
  const user = useRouteLoaderData<User>("layouts/userProvider");

  return (
    <div className="flex flex-col">
      <p>firstname: {user?.firstName}</p>
      <p>lastname: {user?.lastName}</p>
      <p>email: {user?.email}</p>
      <Form method="post">
        <button
          name="action"
          value="logout"
          type="submit"
          className="underline mt-8 font-bold"
        >
          LOGOUT
        </button>
      </Form>
    </div>
  );
}
