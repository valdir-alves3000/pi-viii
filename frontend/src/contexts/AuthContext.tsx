import { setCookie } from "nookies";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProps, AuthProviderProps } from "../data/@types";
import { api } from "../services/api";

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    await api()
      .post("/login", { email, password })
      .then(({ data }) =>
        setCookie(undefined, "app_protection_token", data.access_token, {
          maxAge: 60 * 60 * 9, // 9 hours
        })
      );
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        loading,
        email,
        password,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
