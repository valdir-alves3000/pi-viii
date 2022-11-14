import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import {
  CreateMessageContextProps,
  CreateMessageProviderProps,
  SendMessageProps,
} from "../data/@types";
import { api } from "../services/api";

export const CreateMessageContext = createContext(
  {} as CreateMessageContextProps
);

export function CreateMessageProvider({
  children,
}: CreateMessageProviderProps) {
  const [countSendMessage, setCountSendMessage] = useState(0);
  const [countErrSendMessage, setCountErrSendMessage] = useState(0);

  const { app_protection_token } = parseCookies();

  async function sendMessage({
    phone,
    user_name,
    address,
    name,
    city,
    state,
    date,
  }: SendMessageProps) {
    await api(app_protection_token).post(`/message`, {
      user_name,
      phone,
      address,
      name,
      city,
      state,
      date,
    });
  }

  return (
    <CreateMessageContext.Provider
      value={{
        sendMessage,
        countErrSendMessage,
        countSendMessage,
        setCountErrSendMessage,
        setCountSendMessage,
      }}
    >
      {children}
    </CreateMessageContext.Provider>
  );
}
