import { UserType } from "@/types";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isLogin: boolean;
  login: (jwt: string, user: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

export const useUser = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  const loginHandler = (jwt: string, user: UserType) => {
    window.localStorage.setItem("token", jwt);
    window.localStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
  };

  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin: isLogin, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
