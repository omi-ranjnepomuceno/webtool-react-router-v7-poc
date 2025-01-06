import { useContext } from "react";
import { UserContext } from "~/layouts/UserProvider";

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a UserProvider");
  }

  return context;
}
