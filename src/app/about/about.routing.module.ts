import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 制定自己的路由规则
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about.component';

const aboutRoutes: Routes = [
  {path: '', component: AboutComponent},
]
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
