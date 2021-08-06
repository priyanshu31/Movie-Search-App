import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // This component will output searchMovies EventEmitter
  // This will emit the searched query to call the method the method for searching in search-movie component
  @Output() searchMovies: EventEmitter<string> = new EventEmitter();
  
  // searchQuery to store the query searched by user
  searchQuery: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  // search function to search the query
  search(){

    // emitting using searchMovies to emit the search event as output
    // passing searchQuery to search-movie component for searching
    this.searchMovies.emit(this.searchQuery)
  }

}
