import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramIncidenciasvehiculosComponent } from './barra-herram-incidenciasvehiculos.component';

describe('BarraHerramIncidenciasvehiculosComponent', () => {
  let component: BarraHerramIncidenciasvehiculosComponent;
  let fixture: ComponentFixture<BarraHerramIncidenciasvehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraHerramIncidenciasvehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHerramIncidenciasvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
