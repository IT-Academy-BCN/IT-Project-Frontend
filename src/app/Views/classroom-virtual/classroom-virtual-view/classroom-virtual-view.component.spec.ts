import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomVirtualViewComponent } from './classroom-virtual-view.component';

describe('ClassroomVirtualViewComponent', () => {
  let component: ClassroomVirtualViewComponent;
  let fixture: ComponentFixture<ClassroomVirtualViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomVirtualViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomVirtualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
