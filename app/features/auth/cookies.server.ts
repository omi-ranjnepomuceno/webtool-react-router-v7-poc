import { createCookie } from "react-router";

export const authTokenCookie = createCookie("token", {
  // path: "/",
  // sameSite: "lax",
  httpOnly: true,
  // secure: true,
  // expires: new Date(Date.now() + 60_000),
  // maxAge: 60,
});

export const csrfTokenCookie = createCookie("csrfToken", {
  // path: "/",
  // sameSite: "lax",
  httpOnly: true,
  // secure: true,
  // expires: new Date(Date.now() + 60_000),
  // maxAge: 60,
});
