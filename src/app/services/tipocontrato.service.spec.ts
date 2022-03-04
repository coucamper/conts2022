import { TestBed } from '@angular/core/testing';

import { TipocontratoService } from './tipocontrato.service';

describe('TipocontratoService', () => {
  let service: TipocontratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipocontratoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
