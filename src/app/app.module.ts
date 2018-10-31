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
import { FavComponent } from './fav/fav.component';

import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const myRoutes: Routes = [
  { path: "", redirectTo: "/courses", pathMatch: "full" },
  { path: "courses", component: CoursesComponent },
  { path: "posts", component: PostsComponent },
  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CoursesComponent,
    ResumePipe,
    VoteComponent,
    PanelComponent,
    FavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
