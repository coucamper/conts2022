import { TestBed } from '@angular/core/testing';

import { SalvarcontendorService } from './salvarcontendor.service';

describe('SalvarcontendorService', () => {
  let service: SalvarcontendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarcontendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
