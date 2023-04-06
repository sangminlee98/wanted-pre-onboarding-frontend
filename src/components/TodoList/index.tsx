import React from "react";
import TodoItem from "../TodoItem";
import { Todo } from "@/types/todo";
import styles from "./styles.module.scss";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <ul className={styles.listWrapper}>
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
    </ul>
  );
}

export default React.memo(TodoList);
