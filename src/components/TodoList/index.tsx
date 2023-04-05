import TodoItem from "../TodoItem";
import TodoPresenter from "@/utils/todoPresenter";
import { Todo } from "@/types/todo";
import useInput from "@/hooks/useInput";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoList({ todos, setTodos }: TodoListProps) {
  const presenter = new TodoPresenter(todos);
  const [title, handleTitle, setTitle] = useInput("");
  const handleTodoCreate = () => {
    presenter.create(title, setTodos);
    setTitle("");
  };
  return (
    <div>
      <div>
        <input type="text" value={title} onChange={handleTitle} />
        <button onClick={handleTodoCreate}>추가</button>
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </div>
  );
}
