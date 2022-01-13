import { TestBed } from '@angular/core/testing';

import { SalvarexportacionService } from './salvarexportacion.service';

describe('SalvarexportacionService', () => {
  let service: SalvarexportacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarexportacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
