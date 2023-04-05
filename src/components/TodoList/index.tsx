import TodoItem from "../TodoItem";
import TodoPresenter from "@/utils/todoPresenter";
import { Todo } from "@/types/todo";
import useInput from "@/hooks/useInput";
import React from "react";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodos }: TodoListProps) {
  const presenter = new TodoPresenter(todos);
  const [title, handleTitle, setTitle] = useInput("");
  const handleTodoCreate = () => {
    presenter.create(title, setTodos);
    setTitle("");
  };
  return (
    <div>
      <div>
        <input
          data-testid="new-todo-input"
          type="text"
          value={title}
          onChange={handleTitle}
        />
        <button data-testid="new-todo-add-button" onClick={handleTodoCreate}>
          추가
        </button>
      </div>
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
