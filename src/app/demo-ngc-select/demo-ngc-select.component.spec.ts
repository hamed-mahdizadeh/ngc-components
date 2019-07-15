import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgcSelectComponent } from './demo-ngc-select.component';

describe('DemoNgcSelectComponent', () => {
  let component: DemoNgcSelectComponent;
  let fixture: ComponentFixture<DemoNgcSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgcSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
