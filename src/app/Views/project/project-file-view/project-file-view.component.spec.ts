import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFileViewComponent } from './project-file-view.component';

describe('ProjectFileViewComponent', () => {
  let component: ProjectFileViewComponent;
  let fixture: ComponentFixture<ProjectFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
