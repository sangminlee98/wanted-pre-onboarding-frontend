import { Todo } from "@/types/todo";
import TodoPresenter from "@/utils/todoPresenter";
import { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

export default function TodoPage() {
  const authState = useOutletContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const presenter = new TodoPresenter(todos);

  useEffect(() => {}, []);

  if (!authState) {
    return <Navigate to="/signin" />;
  }
  return (
    <div>
      <div>
        <input type="text" />
        <button>추가</button>
      </div>
      <ul></ul>
    </div>
  );
}
