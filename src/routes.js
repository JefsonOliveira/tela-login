import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
