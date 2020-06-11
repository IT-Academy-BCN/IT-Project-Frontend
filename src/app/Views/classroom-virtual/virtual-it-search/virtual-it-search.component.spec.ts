import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualItSearchComponent } from './virtual-it-search.component';

describe('VirtualItSearchComponent', () => {
  let component: VirtualItSearchComponent;
  let fixture: ComponentFixture<VirtualItSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualItSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualItSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
