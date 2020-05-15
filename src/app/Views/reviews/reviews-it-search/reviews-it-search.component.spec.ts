import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsItSearchComponent } from './reviews-it-search.component';

describe('ReviewsItSearchComponent', () => {
  let component: ReviewsItSearchComponent;
  let fixture: ComponentFixture<ReviewsItSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsItSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsItSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
