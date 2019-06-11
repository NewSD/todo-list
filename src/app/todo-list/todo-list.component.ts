import {Component, OnInit} from '@angular/core';
import {Todo} from '../interface';

interface PrivateTodo extends Todo {
  // ?可选字段
  selected?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: PrivateTodo[] = [
    {id: 999, description: 'For test purpose', category: 1, content: 'test1'},
    {id: 998, description: ' uiouo', category: 2, content: 'test2'},
    {id: 997, description: 'For test purpose uioo', category: 3, content: 'test3'},
  ];

  selectAll = false;

  constructor() {
  }

  ngOnInit() {
  }

  delete(ids: number[]) {
    //
    this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  }

  toggleAll() {
    console.log(this.selectAll);
    this.todos.forEach(item => item.selected = this.selectAll);
  }

  check() {
    this.selectAll = this.todos.every(item => item.selected);
  }

  deleteSelected() {
    const ids = this.todos.filter(item => item.selected).map(item => item.id);
    this.delete(ids);
  }

}
