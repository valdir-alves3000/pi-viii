import { Dispatch, ReactNode, SetStateAction } from "react";

export interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  signIn: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface SweetalertProps {
  icon: "error" | "info" | "success" | "info" | "warning";
  title: string;
  text: string;
}

export interface CreatePlaceContextProps {
  loading: boolean;
  name: string;
  address: string;
  city: string;
  state: string;
  setName: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
  setState: Dispatch<SetStateAction<string>>;
  createPlace: () => Promise<void>;
}

export interface CreatePlaceProviderProps {
  children: ReactNode;
}

export interface CreateUserContextProps {
  name: string;
  email: string;
  phone: string;
  password: string;
  cpf: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setCPF: Dispatch<SetStateAction<string>>;
  createUser: () => Promise<void>;
}

export interface CreateUserProviderProps {
  children: ReactNode;
}

export interface CreateLocationsProps {
  id?: string;
  place_id: string;
}

export interface PlaceProps {
  id?: string;
  address: string;
  name: string;
  city: string;
  state: string;
  date?: string;
}

export interface LocationsProps {
  id?: string;
  created_at: Date;
  placeId: {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
  };
}

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  phone: string;
  locations: [LocationsProps];
}

export interface LocationsPlaceProps {
  created_at: string;
  userId: UserProps;
  placeId: PlaceProps;
}

export interface CreateMessageContextProps {
  countSendMessage: number;
  countErrSendMessage: number;
  setCountErrSendMessage: Dispatch<SetStateAction<number>>;
  setCountSendMessage: Dispatch<SetStateAction<number>>;

  sendMessage: ({
    address,
    city,
    date,
    name,
    phone,
    state,
    user_name,
  }: SendMessageProps) => Promise<void>;
}

export interface SendMessageProps {
  user_name: string;
  phone: string;
  address: string;
  name: string;
  city: string;
  state: string;
  date: string;
}

export interface CreateMessageProviderProps {
  children: ReactNode;
}

export interface IBGEContextProps {
  citys: CityProps[] | null;
  states: StatesProps[] | null;
  getCitys: (UF: string) => Promise<void>;
}

export interface IBGEProviderProps {
  children: ReactNode;
}

export interface StatesProps {
  sigla: string;
  nome: string;
  id: number;
}

export interface CityProps {
  nome: string;
  id: number;
}
