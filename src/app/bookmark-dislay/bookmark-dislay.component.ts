import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-bookmark-dislay',
  templateUrl: './bookmark-dislay.component.html',
  styleUrls: ['./bookmark-dislay.component.css']
})
export class BookmarkDislayComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
