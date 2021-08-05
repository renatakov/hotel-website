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
  {
    path: "/thehut",
    exact: true,
    component: lazy(() => {
      return import("./pages/TheHut/TheHut");
    }),
  },
  {
    path: "/thearea",
    exact: true,
    component: lazy(() => {
      return import("./pages/TheArea/TheArea");
    }),
  },
  {
    path: "/booking",
    exact: true,
    component: lazy(() => {
      return import("./pages/Booking/Booking");
    }),
  },
]