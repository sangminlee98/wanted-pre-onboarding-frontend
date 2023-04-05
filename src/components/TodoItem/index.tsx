import useInput from "@/hooks/useInput";
import { Todo } from "@/types/todo";
import TodoPresenter from "@/utils/todoPresenter";
import { useState } from "react";
import UpdatingInput from "@/components/UpdatingInput";
import NoUpdatingInput from "@/components/NoUpdatingInput";
import React from "react";

type TodoItemProps = {
  todo: Todo;
  presenter: TodoPresenter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoItem({ todo, presenter, setTodos }: TodoItemProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateInput, handleUpdateInput] = useInput(todo.todo);
  const handleTodoDelete = () => {
    presenter.delete(todo, setTodos);
  };
  const handleTodoCheckUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodo = { ...todo, isCompleted: e.target.checked };
    presenter.update(updatedTodo, setTodos);
  };
  const handleTodoInputUpdate = () => {
    const updatedTodo = { ...todo, todo: updateInput };
    presenter.update(updatedTodo, setTodos);
    setIsUpdating(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleTodoCheckUpdate}
      />
      {isUpdating ? (
        <UpdatingInput
          updateInput={updateInput}
          setIsUpdating={setIsUpdating}
          handleUpdateInput={handleUpdateInput}
          handleTodoInputUpdate={handleTodoInputUpdate}
        />
      ) : (
        <NoUpdatingInput
          todo={todo}
          setIsUpdating={setIsUpdating}
          handleTodoDelete={handleTodoDelete}
        />
      )}
    </li>
  );
}

export default React.memo(TodoItem);
