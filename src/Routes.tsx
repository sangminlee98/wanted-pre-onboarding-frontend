import { lazy } from "react";
import GlobalLayout from "@/pages/_layout";

const WelcomePage = lazy(() => import("@/pages/Welcome"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [{ index: true, element: <WelcomePage /> }],
  },
];

export const pages = [{ route: "/" }];
