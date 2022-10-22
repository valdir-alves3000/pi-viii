import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Text } from "./components/Text";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Text>Home</Text>} />
    </Routes>
  );
}
