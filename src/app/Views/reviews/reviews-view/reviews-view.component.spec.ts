import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsViewComponent } from './reviews-view.component';

describe('ReviewsViewComponent', () => {
  let component: ReviewsViewComponent;
  let fixture: ComponentFixture<ReviewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
