import { TestBed } from '@angular/core/testing';

import { FaelleService } from './faelle.service';

describe('FaelleService', () => {
  let service: FaelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
