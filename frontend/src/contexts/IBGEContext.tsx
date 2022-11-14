import { createContext, useEffect, useState } from "react";
import {
  CityProps,
  IBGEContextProps,
  IBGEProviderProps,
  StatesProps,
} from "../data/@types";
import { apiIBGE } from "../services/api";

export const IBGEContext = createContext({} as IBGEContextProps);

export function IBGEProvider({ children }: IBGEProviderProps) {
  const [states, setStates] = useState<StatesProps[] | null>(null);
  const [citys, setCitys] = useState<CityProps[] | null>(null);

  async function getStates() {
    await apiIBGE.get("/").then(({ data }) => {
      setStates(data);
    });
  }

  async function getCitys(UF: string) {
    await apiIBGE.get(`/${UF}/municipios`).then(({ data }) => {
      setCitys(data);
    });
  }

  useEffect(() => {
    getStates();
  }, [states]);
  return (
    <IBGEContext.Provider value={{ citys, getCitys, states }}>
      {children}
    </IBGEContext.Provider>
  );
}
