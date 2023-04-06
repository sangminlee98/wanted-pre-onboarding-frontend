import React from "react";
import { Todo } from "@/types/todo";
import styles from "./styles.module.scss";

type NoUpdatingInputProps = {
  todo: Todo;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  handleTodoDelete: () => void;
};

export function NoUpdatingInput({
  todo,
  setIsUpdating,
  handleTodoDelete,
}: NoUpdatingInputProps) {
  return (
    <div className={styles.inputWrapper}>
      <p className={styles.todo}>{todo.todo}</p>
      <div className={styles.buttonWrapper}>
        <button data-testid="modify-button" onClick={() => setIsUpdating(true)}>
          수정
        </button>
        <button data-testid="delete-button" onClick={handleTodoDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default React.memo(NoUpdatingInput);
