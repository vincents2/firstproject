import { TestBed } from '@angular/core/testing';

import { MaSprachenService } from './ma-sprachen.service';

describe('MaSprachenService', () => {
  let service: MaSprachenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaSprachenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
