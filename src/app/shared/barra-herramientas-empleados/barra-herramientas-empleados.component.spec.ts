import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramientasEmpleadosComponent } from './barra-herramientas-empleados.component';

describe('BarraHerramientasEmpleadosComponent', () => {
  let component: BarraHerramientasEmpleadosComponent;
  let fixture: ComponentFixture<BarraHerramientasEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraHerramientasEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHerramientasEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
