import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCirclesComponent } from './virtual-circles.component';

describe('VirtualCirclesComponent', () => {
  let component: VirtualCirclesComponent;
  let fixture: ComponentFixture<VirtualCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
