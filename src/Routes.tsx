import { lazy } from "react";
import GlobalLayout from "@/pages/_layout";

const WelcomePage = lazy(() => import("@/pages/Welcome"));
const SignUpPage = lazy(() => import("@/pages/SignUp"));
const SignInPage = lazy(() => import("@/pages/SignIn"));
const TodoPage = lazy(() => import("@/pages/Todo"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/todo", element: <TodoPage /> },
    ],
  },
];
