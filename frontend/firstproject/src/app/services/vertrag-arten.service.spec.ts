import { TestBed } from '@angular/core/testing';

import { VertragArtenService } from './vertrag-arten.service';

describe('VertragArtenService', () => {
  let service: VertragArtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VertragArtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
