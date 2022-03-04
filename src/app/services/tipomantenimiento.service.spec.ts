import { TestBed } from '@angular/core/testing';

import { TipomantenimientoService } from './tipomantenimiento.service';

describe('TipomantenimientoService', () => {
  let service: TipomantenimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipomantenimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
