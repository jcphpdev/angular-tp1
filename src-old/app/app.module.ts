import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Load the Http module for communicating with server
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
