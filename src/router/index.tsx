import PrivateRoute from "components/PrivateRoute";
import MainLayout from "layouts/MainLayout";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routePath } from "./paths";
import { appRoutes } from "./routes";
import AccessErrorPage from "pages/access-error";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {appRoutes?.map(({ path, Component, props, isCheckAuth }) => (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute isCheckAuth={Boolean(isCheckAuth)}>
                <Suspense fallback={null}>
                  <Component {...props} />
                </Suspense>
              </PrivateRoute>
            }
          ></Route>
        ))}
      </Route>

      <Route
        path={routePath.AccessError}
        element={
          <Suspense fallback={null}>
            <AccessErrorPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRouter;
