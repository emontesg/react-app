import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
const AUTH_LOCALSTORAGE_KEY = "chamba-logged-in";

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(window.localStorage.getItem(AUTH_LOCALSTORAGE_KEY)) || false
  );

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  useEffect(
    () => {
      window.localStorage.setItem(AUTH_LOCALSTORAGE_KEY, isLoggedIn);
    },
    [isLoggedIn]
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
