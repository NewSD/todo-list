import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { InlineComponent } from './inline/inline.component';
import { LayoutModule} from './layout/layout.module';
import {RouterModule} from '@angular/router';

// 懒加载AboutComponent
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
