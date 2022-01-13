import { TestBed } from '@angular/core/testing';

import { ExportacionesService } from './exportaciones.service';

describe('ExportacionesService', () => {
  let service: ExportacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
