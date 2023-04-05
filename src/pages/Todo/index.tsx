import TodoList from "@/components/TodoList";
import TodoPresenter from "@/utils/todoPresenter";
import { Navigate, useOutletContext } from "react-router-dom";

export default function TodoPage() {
  const authState = useOutletContext();
  const presenter = new TodoPresenter();
  if (!authState) {
    return <Navigate to="/signin" />;
  }
  return (
    <div>
      <div>
        <input type="text" />
        <button>추가</button>
      </div>
      <TodoList presenter={presenter} />
    </div>
  );
}
