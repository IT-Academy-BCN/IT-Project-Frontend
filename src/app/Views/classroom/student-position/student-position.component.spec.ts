import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPositionComponent } from './student-position.component';

describe('StudentPositionComponent', () => {
  let component: StudentPositionComponent;
  let fixture: ComponentFixture<StudentPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
