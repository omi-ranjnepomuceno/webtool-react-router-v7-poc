import type { Route } from "./+types/ApolloClientProvider";
import { Outlet } from "react-router";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { getAuthToken } from "~/features/auth/utils";

export async function loader({ request }: Route.LoaderArgs) {
  const authToken = await getAuthToken(request);
  return {
    authToken,
  };
}

export function getApolloClient(authToken?: string | null) {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: "https://develop.smop.asia/graphql/",
      headers: {
        Authorization: authToken ? `JWT ${authToken}` : "",
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default function ApolloClientProvider({
  loaderData,
}: Route.ComponentProps) {
  const { authToken } = loaderData;
  const client = getApolloClient(authToken);

  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}
