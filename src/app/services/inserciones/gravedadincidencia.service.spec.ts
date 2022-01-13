import { TestBed } from '@angular/core/testing';

import { GravedadincidenciaService } from './gravedadincidencia.service';

describe('GravedadincidenciaService', () => {
  let service: GravedadincidenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravedadincidenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
