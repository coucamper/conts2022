import { TestBed } from '@angular/core/testing';

import { PermisosretribuidosService } from './permisosretribuidos.service';

describe('PermisosretribuidosService', () => {
  let service: PermisosretribuidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosretribuidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
