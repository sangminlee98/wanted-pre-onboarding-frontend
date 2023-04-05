import { Todo } from "@/types/todo";
import TodoPresenter from "@/utils/todoPresenter";

type TodoItemProps = {
  todo: Todo;
  presenter: TodoPresenter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({ todo, presenter, setTodos }: TodoItemProps) {
  const handleTodoDelete = () => {
    presenter.delete(todo, setTodos);
  };
  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => {}} />
      <p>{todo.todo}</p>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={handleTodoDelete}>
        삭제
      </button>
    </li>
  );
}
