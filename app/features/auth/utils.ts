import { authTokenCookie, csrfTokenCookie } from "./cookies";
import type {
  TokenAuthMutation,
  TokenAuthMutationVariables,
  VerifyTokenMutation,
  VerifyTokenMutationVariables,
} from "~/types/__generated__/graphql";
import { tokenAuthMutation, tokenVerifyMutation } from "./mutations";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { getApolloClient } from "~/layouts/ApolloClientProvider";
import { redirect } from "react-router";

export async function getAuthToken(request: Request): Promise<string | null> {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) {
    return null;
  }
  return authTokenCookie.parse(cookieHeader);
}

export async function login(email: string, password: string) {
  const client = getApolloClient();

  try {
    const result = await client.mutate<
      TokenAuthMutation,
      TokenAuthMutationVariables
    >({
      mutation: tokenAuthMutation,
      variables: { email, password },
    });

    return result.data?.tokenCreate;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function logout() {
  return redirect("/login", {
    headers: [
      ["Set-Cookie", await authTokenCookie.serialize("", { maxAge: -1 })],
      ["Set-Cookie", await csrfTokenCookie.serialize("", { maxAge: -1 })],
    ],
  });
}

export async function verifyToken(
  client: ApolloClient<NormalizedCacheObject>,
  token: string
) {
  try {
    const result = await client.mutate<
      VerifyTokenMutation,
      VerifyTokenMutationVariables
    >({
      mutation: tokenVerifyMutation,
      variables: { token },
      errorPolicy: "all",
    });

    return result;
  } catch (error) {
    console.error("Error verifying token:", error);
    throw error;
  }
}
