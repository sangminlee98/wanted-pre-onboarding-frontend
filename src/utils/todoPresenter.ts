import { getTodosAPI } from "@/services/todo";
import { Todo } from "@/types/todo";

export default class TodoPresenter {
  todos: Todo[] = [];
  constructor() {
    getTodosAPI().then((res) => {
      if (res) {
        this.todos = res;
      }
    });
  }
  getTodos() {
    return this.todos;
  }

  delete(todo: Todo, update: React.Dispatch<React.SetStateAction<Todo[]>>) {
    this.todos = this.todos.filter((item) => item.id !== todo.id);
    update(this.todos);
  }

  // add(name: string, update: React.Dispatch<React.SetStateAction<Todo[]>>) {
  //   this.todos = [...this.todos, { id: Date.now(), name, count: 0 }];
  //   update(this.todos);
  // }
}
