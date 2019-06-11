import { Component, OnInit } from '@angular/core';

// 组件的元数据
@Component({
  // 使用组件时用什么样的元素选择器
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
// 组件就是一个class
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
