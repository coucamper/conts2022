import { TestBed } from '@angular/core/testing';

import { PermisosnoretribuidosService } from './permisosnoretribuidos.service';

describe('PermisosnoretribuidosService', () => {
  let service: PermisosnoretribuidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosnoretribuidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
