import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule} from '@angular/forms'

//Importer Http modle pour communiquer avec le serveur
import { HttpModule} from '@angular/http';
import { CoursesComponent } from './courses/courses.component';
import { ResumePipe } from './resume.pipe';
import { VoteComponent } from './vote/vote.component';
import { PanelComponent } from './panel/panel.component';
import { FavComponent } from './fav/fav.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CoursesComponent,
    ResumePipe,
    VoteComponent,
    PanelComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
