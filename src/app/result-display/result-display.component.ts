import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  // Taking Movie object as input from search-movie component
  @Input() movie: Movie;

  // Taking imdbID as input from search-movie component
  @Input() imdbID: string;

  // Bookmark EventEmitter to pass the event to bookmark the movie requested by user
  @Output() Bookmark: EventEmitter<null> = new EventEmitter();

  bookmarked: boolean;

  constructor() {
  }

  // Function to check whether the given movie is already bookmarked or not
  bookmarkCheck() {

    // intializing the bookmaked variable with false
    this.bookmarked = false;

    // Fetching the bookmarks data from localstorage
    let localbookmarks = localStorage.getItem("bookmarks")
    
    // checking whether the localbookmakrs is null or not
    if(localbookmarks) {

      // parsing the localbookmarks using JSON.parse
      let bookmarks = JSON.parse(localbookmarks)

      // Checking if the imdbID of current movie is not euqal to one
      // then it means that the movie is already bookmarked
      if(bookmarks.indexOf(this.imdbID) != -1)
        this.bookmarked = true; // making bookmarked to true as the movie is already bookmarked

    }

  }

  ngOnInit(): void {
    
    // calling the bookmarkCheck method on load of this component
    this.bookmarkCheck()

  }

  ngOnChanges() {

    // calling the bookmarkCheck method on any changes in movie data recieved from search-movie component
    this.bookmarkCheck()
    
  }

  // bookmark method to emit the event to bookmarked the movie requested by user
  bookmark() {

    this.Bookmark.emit()
    this.bookmarked = true; // making bookmarked as true as the movie is bookmarked by user

  }

}
