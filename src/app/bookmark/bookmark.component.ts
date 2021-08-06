import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Movie } from '../Movie';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  // Making array of type Movie to store data of all the bookmarked movie
  movies: Movie[];

  // localbookmarks variable to store the fetched data from localStorage
  localbookmarks: string | null;

  constructor() {

    // Intializing the movies array as empty array on load of this component 
    this.movies = [];

    // Fetching data from localstorage
    this.localbookmarks = localStorage.getItem("bookmarks")

    // if localbookmarks is not null then calling getBookmarkMovies method passing the parsed data from localStorage
    if(this.localbookmarks)
      this.getBookmarkMovies(JSON.parse(this.localbookmarks))
  }

  ngOnInit(): void {
  }

  // getBookmarkMovies method to fetch data of all the movies using imdbID
  async getBookmarkMovies(imdbIDs: string[]) {
    
    // using forEach loop to iterate the imdbIDs array
    imdbIDs.forEach(async (imdbID) => {

      // Fetching Movies using imdbID
      const API_KEY = 'c782b685'
      const res = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)

      // storing the useful information from res in form of movieData class
      let movieData = {
        title: res.data.Title,
        image: res.data.Poster,
        imdbRating: res.data.imdbRating,
        yearOfRealease: res.data.Year
      }

      // pushing this movieData in movies array
      this.movies.push(movieData)
    })
  }
  
}
