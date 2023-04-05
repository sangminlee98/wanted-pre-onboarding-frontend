import { lazy } from "react";
import GlobalLayout from "@/pages/_layout";

const WelcomePage = lazy(() => import("@/pages/Welcome"));
const SignUpPage = lazy(() => import("@/pages/SignUp"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },
];
