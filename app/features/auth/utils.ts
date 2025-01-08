import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

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
