import {Component, OnInit} from '@angular/core';
import {Todo} from '../interface';
import {TodoserviceService} from '../provider/todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] ;
  todoList2: Todo[] = [
    {id: 111, description: 'one', category: 1, content: 'test1'},
    {id: 222, description: 'two', category: 2, content: 'test2'},
    {id: 333, description: 'three', category: 3, content: 'test3'},
  ];

  constructor(private todoService: TodoserviceService) {


  }

  ngOnInit() {
   this.todoList = this.todoService.getTodos();
  }

  delete(ids: number[]) {
    this.todoList = this.todoService.delete(ids);
  }
}
