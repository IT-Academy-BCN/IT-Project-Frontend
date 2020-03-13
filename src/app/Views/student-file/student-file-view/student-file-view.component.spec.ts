import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFileViewComponent } from './student-file-view.component';

describe('StudentFileViewComponent', () => {
  let component: StudentFileViewComponent;
  let fixture: ComponentFixture<StudentFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
