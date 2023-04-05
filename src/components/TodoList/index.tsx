import TodoItem from "../TodoItem";
import TodoPresenter from "@/utils/todoPresenter";
import { Todo } from "@/types/todo";
import useInput from "@/hooks/useInput";
import React from "react";
import onKeydown from "@/utils/onKeydown";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodos }: TodoListProps) {
  const presenter = new TodoPresenter(todos);
  const [title, handleTitle, setTitle] = useInput("");

  // keydown 이벤트가 일어날 때 실행할 핸들러
  const keydownHandler = () => {
    handleTodoCreate();
  };

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
          onKeyDown={(e) => onKeydown(e, keydownHandler)}
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
