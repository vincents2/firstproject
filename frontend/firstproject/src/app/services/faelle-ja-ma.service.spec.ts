import { TestBed } from '@angular/core/testing';

import { FaelleJaMaService } from './faelle-ja-ma.service';

describe('FaelleJaMaService', () => {
  let service: FaelleJaMaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaelleJaMaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
