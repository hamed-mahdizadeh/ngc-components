import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcComponentsLibComponent } from './ngc-components-lib.component';

describe('NgcComponentsLibComponent', () => {
  let component: NgcComponentsLibComponent;
  let fixture: ComponentFixture<NgcComponentsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcComponentsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
