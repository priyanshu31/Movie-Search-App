import { Component } from '@angular/core';
import axios from 'axios';
import { Movie } from './Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movie-Search-App';
  searchResults = false;
  searchQuery: string;
  apiResponse: Movie;

  async searchMovies(searchQuery: string){

    // Fetching Search Results
    const API_KEY = 'c782b685'
    const res = await axios.get(`https://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`)

    this.apiResponse = {
      title: res.data.Title,
      image: res.data.Poster,
      imdbId: res.data.imdbID,
      imdbRating: res.data.imdbRating,
      yearOfRealease: res.data.Year
    }
    
    console.log(this.apiResponse)

    this.searchResults = true
    this.searchQuery = searchQuery
  }
  
}
