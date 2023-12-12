import { lazy } from "react";
import { routePath } from "./paths";

const Login = import("pages/login");
const Home = import("pages/home");

interface RouteI {
  path: string;
  Component: React.ElementType;
  isCheckAuth?: Boolean;
  props?: Object;
  privateRouteProps?: Object;
  children?: RouteI[];
}

export const publicRoutes: RouteI[] = [
  {
    path: routePath.Login,
    Component: lazy(() => Login),
  },
];

export const appRoutes: RouteI[] = [
  {
    path: routePath.Login,
    Component: lazy(() => Login),
    isCheckAuth: false,
  },
  {
    path: routePath.Home,
    Component: lazy(() => Home),
    isCheckAuth: true,
  },
];
