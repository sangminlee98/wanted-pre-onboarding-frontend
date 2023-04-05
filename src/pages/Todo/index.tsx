import { Navigate, useOutletContext } from "react-router-dom";

export default function TodoPage() {
  const authState = useOutletContext();

  if (!authState) {
    return <Navigate to="/signin" />;
  }
  return <div>Todo</div>;
}
