import { Component, OnInit } from '@angular/core';

import { Todo, TodoService } from '../shared';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[];
  newTodo: Todo = {
    done: false,
    text: ''
  };

  constructor(private todoService: TodoService) {
    // Do stuff
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo);
    this.newTodo.text = '';
  }

  getTodos(): void{
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();
  }

}
