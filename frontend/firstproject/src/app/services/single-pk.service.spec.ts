import { TestBed } from '@angular/core/testing';

import { SinglePkService } from './single-pk.service';

describe('SinglePkService', () => {
  let service: SinglePkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
