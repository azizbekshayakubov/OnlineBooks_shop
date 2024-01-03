import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to={"/register"} replace />;
  }
  return <Outlet />;
}
