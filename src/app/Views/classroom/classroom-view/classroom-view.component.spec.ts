import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomViewComponent } from './classroom-view.component';

describe('ClassroomViewComponent', () => {
  let component: ClassroomViewComponent;
  let fixture: ComponentFixture<ClassroomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
