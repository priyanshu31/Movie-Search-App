import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchMovies: EventEmitter<string> = new EventEmitter();
  
  searchQuery: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.searchMovies.emit(this.searchQuery)
    this.searchQuery = ""
  }

}
