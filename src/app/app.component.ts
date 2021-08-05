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
  imdbID: string;

  async searchMovies(searchQuery: string){

    // Fetching Search Results
    const API_KEY = 'c782b685'
    const res = await axios.get(`https://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`)

    this.apiResponse = {
      title: res.data.Title,
      image: res.data.Poster,
      imdbRating: res.data.imdbRating,
      yearOfRealease: res.data.Year
    }

    this.imdbID = res.data.imdbID
    
    console.log(this.apiResponse)

    this.searchResults = true
    this.searchQuery = searchQuery
  }

  Bookmark() {
    console.log("Bookmark Requested")
    let localbookmarks = localStorage.getItem("bookmarks")
    let bookmarks = []
    if(localbookmarks)
      bookmarks = JSON.parse(localbookmarks)

    bookmarks.push(this.imdbID)

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }
}
