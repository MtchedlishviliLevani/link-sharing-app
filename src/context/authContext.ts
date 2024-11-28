import { createContext } from "react";

export type UserType =
  | null
  | undefined
  | {
      uid: string;
      email: string | null;
      displayName: string | null;
    };
export interface AuthContext {
  user: UserType;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleSignUp: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  handleLoggout: () => Promise<void>;
}
export const authContext = createContext<AuthContext>({
  user: null, // Initial value for user is null
  handleLogin: async (email, password) => {
    console.error("handleLogin not implemented", email, password);
  },
  handleSignUp: async (email, password) => {
    console.error("handleSignUp not implemented", email, password);
  },
  handleLoggout: async () => {
    console.error("handleLoggout not implemented");
  },
});
