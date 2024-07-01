import { createContext, useContext } from "react";

export interface AuthContextState {
  isAuthenticated: boolean;
  setAuth: (token: string) => void;
}

export const AuthContext = createContext<AuthContextState | undefined>(
  undefined,
);

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
};
