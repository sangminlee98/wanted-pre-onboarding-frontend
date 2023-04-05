import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import useCheckAuth from "@/hooks/useCheckAuth";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const authState = useCheckAuth();
  return (
    <Suspense fallback={<Loading />}>
      <Navbar authState={authState} />
      <Outlet context={authState} />
    </Suspense>
  );
}
