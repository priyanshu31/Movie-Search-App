import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [

  // SearchMovieComponent to load our Home page where we are searching 
  { path: '', component: SearchMovieComponent },
  
  // BookmarkComponent to load our Bookmark page where we are displaying all the bookmarked movies
  { path: 'bookmarks', component: BookmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
