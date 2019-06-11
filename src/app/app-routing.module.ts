import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
