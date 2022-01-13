import { TestBed } from '@angular/core/testing';

import { RevisionesvehiculosService } from './revisionesvehiculos.service';

describe('RevisionesvehiculosService', () => {
  let service: RevisionesvehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisionesvehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
