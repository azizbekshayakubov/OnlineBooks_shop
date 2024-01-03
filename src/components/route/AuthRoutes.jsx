/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoutes({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}
