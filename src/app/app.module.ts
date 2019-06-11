import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { InlineComponent } from './inline/inline.component';
import { LayoutModule} from './layout/layout.module';
import {RouterModule} from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import {TodoserviceService} from './provider/todoservice.service';
// 懒加载AboutComponent
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InlineComponent,
    CreateTodoComponent,
    TodoListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    TodoserviceService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
