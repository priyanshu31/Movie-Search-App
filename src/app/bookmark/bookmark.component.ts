import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Movie } from '../Movie';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  movies: Movie[];
  localbookmarks: string | null;

  constructor() {
    this.movies = [];

    this.localbookmarks = localStorage.getItem("bookmarks")

    if(this.localbookmarks)
      this.getBookmarkMovies(JSON.parse(this.localbookmarks))
  }

  ngOnInit(): void {
  }

  async getBookmarkMovies(imdbIDs: string[]) {
    
    imdbIDs.forEach(async (imdbID) => {

      // Fetching Movies thorugh imdbID Results
      const API_KEY = 'c782b685'
      const res = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)

      let movieData = {
        title: res.data.Title,
        image: res.data.Poster,
        imdbRating: res.data.imdbRating,
        yearOfRealease: res.data.Year
      }

      this.movies.push(movieData)
    })
  }
  
}
