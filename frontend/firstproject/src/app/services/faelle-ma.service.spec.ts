import { TestBed } from '@angular/core/testing';

import { FaelleMaService } from './faelle-ma.service';

describe('FaelleMaService', () => {
  let service: FaelleMaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaelleMaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
