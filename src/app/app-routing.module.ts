import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
