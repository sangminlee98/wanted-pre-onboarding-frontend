import TodoList from "@/components/TodoList";
import { getTodosAPI } from "@/services/todo";
import { Todo } from "@/types/todo";
import React from "react";
import { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

export function TodoPage() {
  const authState = useOutletContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    if (!authState) return;
    getTodosAPI().then((todos) => {
      if (todos) {
        setTodos(todos);
      }
    });
  }, [authState]);
  if (!authState) {
    return <Navigate to="/signin" />;
  }
  return <TodoList todos={todos} setTodos={setTodos} />;
}

export default React.memo(TodoPage);
