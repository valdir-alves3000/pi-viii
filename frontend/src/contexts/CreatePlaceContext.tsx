import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreatePlaceContextProps,
  CreatePlaceProviderProps,
} from "../data/@types";
import { api } from "../services/api";
import { sweetalert } from "../utils/sweetalert";

export const CreatePlaceContext = createContext({} as CreatePlaceContextProps);

export function CreatePlaceProvider({ children }: CreatePlaceProviderProps) {
  const { app_protection_token } = parseCookies();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  async function createPlace() {
    setLoading(true);

    await api(app_protection_token)
      .post("/places", {
        name,
        address,
        city,
        state,
      })
      .then(({ data }) => {
        navigate("/qrcode_generate", {
          state: {
            id: data.id,
            address,
            name,
            city,
            state,
          },
        });
      })
      .catch((err) => {
        sweetalert({
          icon: "error",
          title: "Falha na Criação",
          text: "Não foi possivel criar a Identificação do Local.",
        });
      })
      .finally(() => {
        setName("");
        setAddress("");
        setCity("");
        setState("");
        setLoading(false);
      });
  }

  return (
    <CreatePlaceContext.Provider
      value={{
        address,
        city,
        createPlace,
        name,
        setAddress,
        setCity,
        setName,
        setState,
        state,
        loading,
      }}
    >
      {children}
    </CreatePlaceContext.Provider>
  );
}
