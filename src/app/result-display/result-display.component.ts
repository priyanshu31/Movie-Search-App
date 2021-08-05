import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input() movie: Movie;
  @Output() Bookmark: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bookmark() {
    this.Bookmark.emit()
  }

}
