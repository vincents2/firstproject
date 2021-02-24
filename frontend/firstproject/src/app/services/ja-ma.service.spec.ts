import { TestBed } from '@angular/core/testing';

import { JaMaService } from './ja-ma.service';

describe('JaMaService', () => {
  let service: JaMaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaMaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
