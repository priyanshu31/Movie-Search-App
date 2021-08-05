import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input() movie: Movie;
  @Input() imdbID: string
  @Output() Bookmark: EventEmitter<null> = new EventEmitter();

  bookmarked: boolean;

  constructor() {
  }

  bookmarkCheck() {

    this.bookmarked = false;

    let localbookmarks = localStorage.getItem("bookmarks")
    
    if(localbookmarks) {
      let bookmarks = JSON.parse(localbookmarks)
      if(bookmarks.indexOf(this.imdbID) != -1)
        this.bookmarked = true;
    }
  }

  ngOnInit(): void {
    this.bookmarkCheck()
  }

  ngOnChanges() {
    this.bookmarkCheck()
  }

  bookmark() {
    this.Bookmark.emit()
    this.bookmarked = true;
  }

}
