import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Movie } from '../Movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Title of App
  title = 'Movie-Search-App'; 
  
  // Initially False as nothing is searched will make it true when searchMovies method is called
  // so that ngIf directive condition can be true and searchResults will be displayed
  searchResults = false; 
  
  // searchQuery to store the event coming from search bar component 
  searchQuery: string;

  // apiResponse of type Movie to store and pass the response of result coming from API after search 
  apiResponse: Movie;

  // imdbID to store and pass the imdbID od searched Movie
  imdbID: string;

  // searchMovies function to accept the query and make a api request to get the response from the API
  // as we are using await for our api request we should make this function async 
  async searchMovies(searchQuery: string){

    // Fetching Search Results
    const API_KEY = 'c782b685'
    const res = await axios.get(`https://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`)

    // make apiResponse object to take extract required data from our API res
    this.apiResponse = {
      title: res.data.Title,
      image: res.data.Poster,
      imdbRating: res.data.imdbRating,
      yearOfRealease: res.data.Year
    }

    // storing imdbID of our Movie
    this.imdbID = res.data.imdbID
    
    console.log(this.apiResponse)

    // Making searchResults true to display the data in form of a card
    this.searchResults = true
    this.searchQuery = searchQuery
  }

  // Bookmark method to bookmark the movie requested by user
  Bookmark() {

    // Fetching data from localstorage
    let localbookmarks = localStorage.getItem("bookmarks")
    let bookmarks = []
    if(localbookmarks)
      bookmarks = JSON.parse(localbookmarks)

    // pushing the imdbID of requested movie in aaray
    bookmarks.push(this.imdbID)

    // updating the localstorage with new bookmarks
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }

}