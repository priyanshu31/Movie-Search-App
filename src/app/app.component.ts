import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Search-App';

  async searchMovies(searchQuery: string){
    console.log(searchQuery)
    const API_KEY = 'c782b685'
    const res = await axios.get(`https://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`)
    console.log(res)
  }
  
}
