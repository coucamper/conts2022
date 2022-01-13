import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramientasPesajesComponent } from './barra-herramientas-pesajes.component';

describe('BarraHerramientasPesajesComponent', () => {
  let component: BarraHerramientasPesajesComponent;
  let fixture: ComponentFixture<BarraHerramientasPesajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraHerramientasPesajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHerramientasPesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
