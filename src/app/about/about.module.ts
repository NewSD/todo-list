import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
// 装饰器
// import { Injectable,Inject} from '@angular/core';


@NgModule({
  declarations: [ AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
  ],
})
export class AboutModule { }
