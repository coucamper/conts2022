import { TestBed } from '@angular/core/testing';

import { ContratoempleadoService } from './contratoempleado.service';

describe('ContratoempleadoService', () => {
  let service: ContratoempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
