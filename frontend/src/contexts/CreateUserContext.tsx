import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import {
  CreateUserContextProps,
  CreateUserProviderProps,
} from "../data/@types";
import { api } from "../services/api";
import { formatData } from "../utils/formatData";

export const CreateUserContext = createContext({} as CreateUserContextProps);

export function CreateUserProvider({ children }: CreateUserProviderProps) {
  const { app_protection_token } = parseCookies();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");

  async function createUser() {
    await api(app_protection_token).post("/users", {
      name,
      email,
      password,
      phone: formatData.clearFormat(phone),
      cpf: formatData.clearFormat(cpf),
    });
  }

  return (
    <CreateUserContext.Provider
      value={{
        name,
        email,
        phone,
        password,
        cpf,
        createUser,
        setCPF,
        setPassword,
        setName,
        setEmail,
        setPhone,
      }}
    >
      {children}
    </CreateUserContext.Provider>
  );
}
