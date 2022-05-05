import { TestBed } from '@angular/core/testing';

import { TurnoempleadoService } from './turnoempleado.service';

describe('TurnoempleadoService', () => {
  let service: TurnoempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnoempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
