import useCheckAuth from "@/hooks/useCheckAuth";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const authState = useCheckAuth();
  return (
    <Suspense fallback="loading...">
      <Outlet context={authState} />
    </Suspense>
  );
}
