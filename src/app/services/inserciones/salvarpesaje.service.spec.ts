import { TestBed } from '@angular/core/testing';

import { SalvarpesajeService } from './salvarpesaje.service';

describe('SalvarpesajeService', () => {
  let service: SalvarpesajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarpesajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
