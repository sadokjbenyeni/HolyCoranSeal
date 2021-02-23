import { TestBed } from '@angular/core/testing';

import { SealDataService } from './seal-data.service';

describe('SealDataService', () => {
  let service: SealDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SealDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
