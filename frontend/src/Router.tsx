import { parseCookies } from "nookies";
import { Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { Home } from "./components/Home";
import { Locations } from "./components/Locations";
import { Login } from "./components/Login";
import { Place } from "./components/Place";
import { QRCodeGenerate } from "./components/QRCodeGenerate";
import { Register } from "./components/Register";
import { User } from "./components/User";

import { CreateMessageProvider } from "./contexts/CreateMessageContext";
import { CreatePlaceProvider } from "./contexts/CreatePlaceContext";
import { CreateUserProvider } from "./contexts/CreateUserContext";
import { IBGEProvider } from "./contexts/IBGEContext";

export function Router() {
  const { app_protection_token: token } = parseCookies();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/qrcode_generate" element={<QRCodeGenerate />} />

      <Route
        path="/locations"
        element={
          <CreateMessageProvider>
            <Locations />
          </CreateMessageProvider>
        }
      />

      <Route
        path="/place"
        element={
          <CreatePlaceProvider>
            <IBGEProvider>
              <Place />
            </IBGEProvider>
          </CreatePlaceProvider>
        }
      />
      <Route
        path="/create-user"
        element={
          <CreateUserProvider>
            <CreateUser />
          </CreateUserProvider>
        }
      />
    </Routes>
  );
}
