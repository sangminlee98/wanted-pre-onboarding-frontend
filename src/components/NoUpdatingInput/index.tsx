import { Todo } from "@/types/todo";

type NoUpdatingInputProps = {
  todo: Todo;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  handleTodoDelete: () => void;
};

export default function NoUpdatingInput({
  todo,
  setIsUpdating,
  handleTodoDelete,
}: NoUpdatingInputProps) {
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
