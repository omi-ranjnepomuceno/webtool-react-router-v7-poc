import type { Route } from "./+types/userProvider";
import { getApolloClient } from "~/features/auth/utils";
import {
  getAuthToken,
  logout,
  verifyToken,
} from "~/features/auth/utils.server";

export async function loader({ request }: Route.LoaderArgs) {
  const authToken = await getAuthToken(request);
  const client = getApolloClient(authToken);

  if (authToken) {
    const verifyResult = await verifyToken(client, authToken!);
    if (verifyResult.errors) {
      return await logout();
    }

    return verifyResult.data?.tokenVerify?.user;
  }
}
