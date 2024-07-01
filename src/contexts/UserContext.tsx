import { createContext } from "react";

import { UserType } from "@/api/types/rooms";

export interface UserContextState {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const UserContext = createContext<UserContextState | undefined>(
  undefined,
);
