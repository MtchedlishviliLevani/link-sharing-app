import { AuthContext, authContext } from "@/context/authContext";
import { useContext } from "react";

export function useAuth(): AuthContext {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Something Error AuthContext");
  }
  return context;
}
