import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Search-App';

  searchMovies(searchQuery: string){
    console.log(searchQuery)
  }
  
}
