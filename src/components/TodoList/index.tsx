import TodoItem from "../TodoItem";
import { Todo } from "@/types/todo";
import React from "react";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
