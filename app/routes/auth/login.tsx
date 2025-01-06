import type { Route } from "./+types/login";
import { redirect, useActionData } from "react-router";
import LoginForm from "~/features/auth/components/LoginForm";
import { authTokenCookie, csrfTokenCookie } from "~/features/auth/cookies";
import { login } from "~/features/auth/utils";
import type { AccountError } from "~/types/__generated__/graphql";
import smLogo from "~/assets/images/smo-blue.svg";
import smLoginImage from "~/assets/images/smop-login.svg";

export function meta() {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to Login" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let email = formData.get("email") as string;
  let password = formData.get("password") as string;

  const loginResult = await login(email, password);

  if (loginResult?.errors.length) {
    return loginResult.errors[0];
  }

  const { token, csrfToken } = loginResult || {};
  return redirect("/", {
    headers: [
      ["Set-Cookie", await authTokenCookie.serialize(token)],
      ["Set-Cookie", await csrfTokenCookie.serialize(csrfToken)],
    ],
  });
}

export default function Login() {
  const error = useActionData<AccountError>();

  return (
    <div className="w-full max-w-[328px] lg:max-w-[800px] border border-gray-300 bg-white">
      {error && (
        <p className="bg-error p-3 text-white text-xs">{error.message}</p>
      )}
      <div className="p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="mt-auto w-full lg:w-64">
          <img src={smLoginImage} alt="sm-login-image" />
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-4">
            <img src={smLogo} alt="sm-logo" width={50} />
            <p className="text-2xl">Welcome Back!</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
