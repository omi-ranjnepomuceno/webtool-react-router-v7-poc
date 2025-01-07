import type { Route } from "./+types/ApolloClientProvider";
import { Outlet, useLoaderData } from "react-router";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  type NormalizedCacheObject,
} from "@apollo/client";
import { getAuthToken } from "~/features/auth/utils";

export function getApolloClient(authToken?: string | null) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://develop.smop.asia/graphql/",
      headers: {
        Authorization: authToken ? `JWT ${authToken}` : "",
      },
    }),
    cache: new InMemoryCache(),
  });
}

export async function loader({ request }: Route.LoaderArgs) {
  const authToken = await getAuthToken(request);
  const client = getApolloClient(authToken);

  return client;
}

export default function ApolloClientProvider() {
  const client = useLoaderData<ApolloClient<NormalizedCacheObject>>();

  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}
