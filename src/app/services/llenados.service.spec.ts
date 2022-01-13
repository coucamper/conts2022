import { TestBed } from '@angular/core/testing';

import { LlenadosService } from './llenados.service';

describe('LlenadosService', () => {
  let service: LlenadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlenadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
