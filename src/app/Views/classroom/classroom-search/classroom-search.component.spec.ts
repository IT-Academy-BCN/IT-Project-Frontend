import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSearchComponent } from './classroom-search.component';

describe('ClassroomSearchComponent', () => {
  let component: ClassroomSearchComponent;
  let fixture: ComponentFixture<ClassroomSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
