import { TestBed } from '@angular/core/testing';

import { NgcComponentsLibService } from './ngc-components-lib.service';

describe('NgcComponentsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgcComponentsLibService = TestBed.get(NgcComponentsLibService);
    expect(service).toBeTruthy();
  });
});
