import { Injectable } from '@angular/core';
import { Todo } from './todo';

const TODOS: Todo[] = [
    {done: false, text: 'learn angular 2'},
    {done: true, text: 'become a boss'},
    {done: false, text: 'go to the moon'}
];

@Injectable()
export class TodoService {
  todos: Todo[] = TODOS;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
      let newTodo: Todo = {
          done: todo.done,
          text: todo.text
      };
      this.todos.push(newTodo);
  }
}
