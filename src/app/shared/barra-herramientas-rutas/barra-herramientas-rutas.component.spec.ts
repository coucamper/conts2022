import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramientasRutasComponent } from './barra-herramientas-rutas.component';

describe('BarraHerramientasRutasComponent', () => {
  let component: BarraHerramientasRutasComponent;
  let fixture: ComponentFixture<BarraHerramientasRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraHerramientasRutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHerramientasRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
