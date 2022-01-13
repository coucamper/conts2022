import { TestBed } from '@angular/core/testing';

import { TiposincidenciaService } from './tiposincidencia.service';

describe('TiposincidenciaService', () => {
  let service: TiposincidenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposincidenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
