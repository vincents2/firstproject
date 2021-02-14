import { TestBed } from '@angular/core/testing';

import { MaArtenService } from './ma-arten.service';

describe('MaArtenService', () => {
  let service: MaArtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaArtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
