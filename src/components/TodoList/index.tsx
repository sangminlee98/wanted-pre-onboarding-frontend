import { useState } from "react";
import TodoItem from "../TodoItem";
import TodoPresenter from "@/utils/todoPresenter";
import { Todo } from "@/types/todo";

type TodoListProps = {
  presenter: TodoPresenter;
};

export default function TodoList({ presenter }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(presenter.getTodos());
  return (
    <ul>{todos.length > 0 && todos.map((todo) => <TodoItem {...todo} />)}</ul>
  );
}
