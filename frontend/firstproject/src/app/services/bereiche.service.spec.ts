import { TestBed } from '@angular/core/testing';

import { BereicheService } from './bereiche.service';

describe('BereicheService', () => {
  let service: BereicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BereicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
