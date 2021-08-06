import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDislayComponent } from './bookmark-dislay.component';

describe('BookmarkDislayComponent', () => {
  let component: BookmarkDislayComponent;
  let fixture: ComponentFixture<BookmarkDislayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkDislayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkDislayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
