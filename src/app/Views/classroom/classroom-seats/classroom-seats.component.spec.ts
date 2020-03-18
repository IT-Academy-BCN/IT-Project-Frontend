import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSeatsComponent } from './classroom-seats.component';

describe('ClassroomSeatsComponent', () => {
  let component: ClassroomSeatsComponent;
  let fixture: ComponentFixture<ClassroomSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
