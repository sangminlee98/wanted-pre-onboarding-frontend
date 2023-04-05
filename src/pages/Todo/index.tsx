import TodoList from "@/components/TodoList";
import { getTodosAPI } from "@/services/todo";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

export default function TodoPage() {
  const authState = useOutletContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    getTodosAPI().then((todos) => {
      if (todos) {
        setTodos(todos);
      }
    });
  }, []);
  if (!authState) {
    return <Navigate to="/signin" />;
  }
  return <TodoList todos={todos} setTodos={setTodos} />;
}
