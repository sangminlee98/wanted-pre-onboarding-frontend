import { Todo } from "@/types/todo";

export default class TodoPresenter {
  todos;
  constructor(todos: Todo[]) {
    this.todos = todos;
  }
  getHabits() {
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
