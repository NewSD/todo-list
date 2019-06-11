import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {AboutRoutingModule} from './about.routing.module';
// 装饰器
// import { Injectable,Inject} from '@angular/core';


@NgModule({
  declarations: [ AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent,
  ],
})
export class AboutModule { }
