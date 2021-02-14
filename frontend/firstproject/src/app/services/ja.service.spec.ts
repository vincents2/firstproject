import { TestBed } from '@angular/core/testing';

import { JaService } from './ja.service';

describe('JaService', () => {
  let service: JaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
