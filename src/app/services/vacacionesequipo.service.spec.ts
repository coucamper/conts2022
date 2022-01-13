import { TestBed } from '@angular/core/testing';

import { VacacionesequipoService } from './vacacionesequipo.service';

describe('VacacionesequipoService', () => {
  let service: VacacionesequipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacacionesequipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
