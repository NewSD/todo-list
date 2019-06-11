import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {AboutModule} from './about/about.module';
import { InlineComponent } from './inline/inline.component';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
