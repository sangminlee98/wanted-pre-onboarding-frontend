import { useRoutes } from "react-router-dom";
import { routes } from "@/Routes";
import "@/reset.scss";

export default function App() {
  const elem = useRoutes(routes);
  return <>{elem}</>;
}
