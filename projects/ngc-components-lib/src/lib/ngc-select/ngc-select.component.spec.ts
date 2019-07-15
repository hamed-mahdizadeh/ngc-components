import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcSelectComponent } from './ngc-select.component';

describe('NgcSelectComponent', () => {
  let component: NgcSelectComponent;
  let fixture: ComponentFixture<NgcSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
