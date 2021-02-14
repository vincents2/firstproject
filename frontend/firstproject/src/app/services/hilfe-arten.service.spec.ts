import { TestBed } from '@angular/core/testing';

import { HilfeArtenService } from './hilfe-arten.service';

describe('HilfeArtenService', () => {
  let service: HilfeArtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HilfeArtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
