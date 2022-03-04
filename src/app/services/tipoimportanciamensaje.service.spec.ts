import { TestBed } from '@angular/core/testing';

import { TipoimportanciamensajeService } from './tipoimportanciamensaje.service';

describe('TipoimportanciamensajeService', () => {
  let service: TipoimportanciamensajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoimportanciamensajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
