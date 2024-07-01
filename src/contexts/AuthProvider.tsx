import { getItemAsync, setItemAsync } from "expo-secure-store";
import React, { ReactNode, useEffect, useState, useCallback } from "react";

import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getAuthState = useCallback(async () => {
    try {
      const token = await getItemAsync("token");
      setIsAuthenticated(!!token);
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  const setAuth = useCallback(async (token: string) => {
    try {
      await setItemAsync("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      return Promise.reject(error);
    }
  }, []);

  useEffect(() => {
    getAuthState();
  }, [getAuthState]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
