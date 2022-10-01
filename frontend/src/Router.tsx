import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
  );
}
