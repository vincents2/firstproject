import { TestBed } from '@angular/core/testing';

import { CombinedPkService } from './combined-pk.service';

describe('CombinedPkService', () => {
  let service: CombinedPkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinedPkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
