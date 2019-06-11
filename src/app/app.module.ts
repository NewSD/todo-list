import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AboutModule} from './about/about.module';
import { InlineComponent } from './inline/inline.component';
import { LayoutModule} from './layout/layout.module';
import { AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
]

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
    LayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
