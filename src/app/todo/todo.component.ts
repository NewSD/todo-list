import { Component, OnInit } from '@angular/core';
import {Todo} from '../interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [
    {id: 999, description: 'For test purpose', category: 1, content: 'test1'},
    {id: 998, description: ' uiouo', category: 2, content: 'test2'},
    {id: 997, description: 'For test purpose uioo', category: 3, content: 'test3'},
  ];
  constructor() { }

  ngOnInit() {
  }
  delete(ids: number[]) {
    this.todoList = this.todoList.filter(item => ids.indexOf(item.id) === -1);
  }

}
