import useInput from "@/hooks/useInput";
import { Todo } from "@/types/todo";
import TodoPresenter from "@/utils/todoPresenter";
import { useState } from "react";

type TodoItemProps = {
  todo: Todo;
  presenter: TodoPresenter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({ todo, presenter, setTodos }: TodoItemProps) {
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

  function UpdatingInput() {
    return (
      <>
        <input
          data-testid="modify-input"
          value={updateInput}
          onChange={handleUpdateInput}
        />
        <button data-testid="submit-button" onClick={handleTodoInputUpdate}>
          제출
        </button>
        <button
          data-testid="cancel-button"
          onClick={() => setIsUpdating(false)}
        >
          취소
        </button>
      </>
    );
  }

  function NoUpdatingInput() {
    return (
      <>
        <p>{todo.todo}</p>
        <button data-testid="modify-button" onClick={() => setIsUpdating(true)}>
          수정
        </button>
        <button data-testid="delete-button" onClick={handleTodoDelete}>
          삭제
        </button>
      </>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleTodoCheckUpdate}
      />
      {isUpdating ? <UpdatingInput /> : <NoUpdatingInput />}
    </li>
  );
}
