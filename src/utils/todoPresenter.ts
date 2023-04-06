import { createTodoAPI, deleteTodoAPI, updateTodoAPI } from "@/services/todo";
import { Todo } from "@/types/todo";

export const createTodo = async (
  title: string,
  update: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  const response = await createTodoAPI(title);
  if (response) {
    // const newTodos = [...todos, response];
    update((todos) => [...todos, response]);
  }
};

export const deleteTodo = async (
  todo: Todo,
  update: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  const response = await deleteTodoAPI(todo.id);
  if (response) {
    update((todos) => todos.filter((item) => item.id !== todo.id));
  }
};

export const updateTodo = async (
  todo: Todo,
  update: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  const response = await updateTodoAPI(todo.id, todo.todo, todo.isCompleted);
  if (response) {
    update((todos) => {
      const todoIndex = todos.findIndex((item) => item.id === todo.id);
      const updatedTodos = [...todos];
      updatedTodos[todoIndex] = response;
      return updatedTodos;
    });
  }
};
