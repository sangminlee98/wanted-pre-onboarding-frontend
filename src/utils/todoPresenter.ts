import { createTodoAPI } from "@/services/todo";
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
}
