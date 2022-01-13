import { TestBed } from '@angular/core/testing';

import { SalvarincidenciaService } from './salvarincidencia.service';

describe('SalvarincidenciaService', () => {
  let service: SalvarincidenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarincidenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
