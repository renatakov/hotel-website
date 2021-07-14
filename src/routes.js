import { lazy } from "react";

export default [
  {
    path: "/",
    exact: true,
    component: lazy(() => {
      return import("./pages/Home");
    }),
  },
  {
    path: "/aboutus",
    exact: true,
    component: lazy(() => {
      return import("./pages/AboutUs/AboutUs");
    }),
  },
]