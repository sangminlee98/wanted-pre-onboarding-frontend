import TodoItem from "../TodoItem";
import TodoPresenter from "@/utils/todoPresenter";
import { Todo } from "@/types/todo";
import React from "react";

type TodoListProps = {
  todos: Todo[];
  presenter: TodoPresenter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, presenter, setTodos }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              presenter={presenter}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
