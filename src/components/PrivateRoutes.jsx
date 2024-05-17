import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const {currUser} = useContext(AuthContext)
  return currUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
