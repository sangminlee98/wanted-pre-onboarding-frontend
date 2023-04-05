import { createTodoAPI, deleteTodoAPI, updateTodoAPI } from "@/services/todo";
import { Todo } from "@/types/todo";

export default class TodoPresenter {
  private todos: Todo[];
  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  setTodos(todos: Todo[]) {
    this.todos = todos;
  }

  async create(
    title: string,
    update: React.Dispatch<React.SetStateAction<Todo[]>>
  ) {
    const response = await createTodoAPI(title);
    if (response) {
      this.todos = [...this.todos, response];
      update(this.todos);
    }
  }

  async delete(
    todo: Todo,
    update: React.Dispatch<React.SetStateAction<Todo[]>>
  ) {
    const response = await deleteTodoAPI(todo.id);
    if (response) {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
      update(this.todos);
    }
  }

  async update(
    todo: Todo,
    update: React.Dispatch<React.SetStateAction<Todo[]>>
  ) {
    const response = await updateTodoAPI(todo.id, todo.todo, todo.isCompleted);
    if (response) {
      const todoIndex = this.todos.findIndex((item) => item.id === todo.id);
      const updatedTodos = [...this.todos];
      updatedTodos[todoIndex] = response;
      this.todos = updatedTodos;
      update(this.todos);
    }
  }
}
