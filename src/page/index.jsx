import { Route, Routes } from "react-router-dom";
import { authRoutes, protectedRoutes } from "/src/configs/routes.js";
import AuthRoutes from "../components/route/AuthRoutes";
import ProtectedRoutes from "../components/route/ProtectedRoutes";

import AppRoute from "../components/route/AppRoute";
import CheckAuth from "../components/route/CheckAuth";
import { useSelector } from "react-redux";
import { Suspense } from "react";

export default function AllPage() {
  const { signedIn } = useSelector((state) => state.session);
  const { role } = useSelector((state) => state.user);
  console.log(signedIn);

  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoutes isAuthenticated={signedIn} />}
          >
            {protectedRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <CheckAuth userRole={role} role={route.role}>
                    <AppRoute component={route.component} />
                  </CheckAuth>
                }
              />
            ))}
          </Route>
          <Route path="/" element={<AuthRoutes isAuthenticated={signedIn} />}>
            {authRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<AppRoute component={route.component} />}
              />
            ))}
          </Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
