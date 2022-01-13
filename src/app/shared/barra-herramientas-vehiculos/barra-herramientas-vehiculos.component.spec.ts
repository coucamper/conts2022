import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramientasVehiculosComponent } from './barra-herramientas-vehiculos.component';

describe('BarraHerramientasVehiculosComponent', () => {
  let component: BarraHerramientasVehiculosComponent;
  let fixture: ComponentFixture<BarraHerramientasVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraHerramientasVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHerramientasVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
