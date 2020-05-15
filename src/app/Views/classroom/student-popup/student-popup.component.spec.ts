import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPopupComponent } from './student-popup.component';

describe('StudentPopupComponent', () => {
  let component: StudentPopupComponent;
  let fixture: ComponentFixture<StudentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
