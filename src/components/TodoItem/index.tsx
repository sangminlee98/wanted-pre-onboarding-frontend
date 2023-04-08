import React from "react";
import useInput from "@/hooks/useInput";
import { Todo } from "@/types/todo";
import { useState } from "react";
import UpdatingInput from "@/components/UpdatingInput";
import NoUpdatingInput from "@/components/NoUpdatingInput";
import { deleteTodo, updateTodo } from "@/utils/todoPresenter";
import styles from "./styles.module.scss";

type TodoItemProps = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoItem({ todo, setTodos }: TodoItemProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateInput, handleUpdateInput, setUpdateInput] = useInput(todo.todo);
  const handleTodoDelete = () => {
    deleteTodo(todo, setTodos);
  };
  const handleTodoCheckUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodo = { ...todo, isCompleted: e.target.checked };
    updateTodo(updatedTodo, setTodos);
  };
  const handleTodoInputUpdate = async () => {
    const updatedTodo = { ...todo, todo: updateInput };
    await updateTodo(updatedTodo, setTodos);
    setIsUpdating(false);
  };
  const handleCancle = () => {
    setIsUpdating(false);
    setUpdateInput(todo.todo);
  };

  return (
    <li className={styles.todoWrapper}>
      <input
        className={styles.todoCheckbox}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleTodoCheckUpdate}
      />
      {isUpdating ? (
        <UpdatingInput
          updateInput={updateInput}
          handleUpdateInput={handleUpdateInput}
          handleTodoInputUpdate={handleTodoInputUpdate}
          handleCancle={handleCancle}
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
