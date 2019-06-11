import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos =[
    {id:999,description:"For test purpose",category:1,content:"test1"},
    {id:998,description:" uiouo",category:2,content:"test2"},
    {id:997,description:"For test purpose uioo",category:3,content:"test3"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
