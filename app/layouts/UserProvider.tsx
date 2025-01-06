import type { Route } from "./+types/UserProvider";
import { Outlet } from "react-router";
import { createContext, useEffect, useState } from "react";
import { getApolloClient } from "./ApolloClientProvider";
import { getAuthToken, logout, verifyToken } from "~/features/auth/utils";
import type { User } from "~/types/User";

interface UserContext {
  user?: User;
}

export const UserContext = createContext<UserContext>({});

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

export default function UserProvider({ loaderData }: Route.ComponentProps) {
  const user = loaderData as User;

  const [userContext, setUserContext] = useState<undefined | User>(undefined);

  useEffect(() => {
    if (user) {
      setUserContext(user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user: userContext }}>
      <Outlet />
    </UserContext.Provider>
  );
}
