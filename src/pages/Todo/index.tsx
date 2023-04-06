import TodoList from "@/components/TodoList";
import useInput from "@/hooks/useInput";
import { getTodosAPI } from "@/services/todo";
import { Todo } from "@/types/todo";
import onKeydown from "@/utils/onKeydown";
import { createTodo } from "@/utils/todoPresenter";
import React from "react";
import { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

export function TodoPage() {
  const authState = useOutletContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, handleTitle, setTitle] = useInput("");

  // keydown 이벤트가 일어날 때 실행할 핸들러
  const keydownHandler = () => {
    handleTodoCreate();
  };

  const handleTodoCreate = () => {
    createTodo(title, setTodos);
    setTitle("");
  };
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
  return (
    <div>
      <div>
        <input
          data-testid="new-todo-input"
          type="text"
          value={title}
          onChange={handleTitle}
          onKeyDown={(e) => onKeydown(e, keydownHandler)}
        />
        <button data-testid="new-todo-add-button" onClick={handleTodoCreate}>
          추가
        </button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default React.memo(TodoPage);
