import { TestBed } from '@angular/core/testing';

import { PesajesService } from './pesajes.service';

describe('PesajesService', () => {
  let service: PesajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
