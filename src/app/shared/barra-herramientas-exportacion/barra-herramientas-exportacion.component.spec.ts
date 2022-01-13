import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramientasExportacionComponent } from './barra-herramientas-exportacion.component';

describe('BarraHerramientasExportacionComponent', () => {
  let component: BarraHerramientasExportacionComponent;
  let fixture: ComponentFixture<BarraHerramientasExportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraHerramientasExportacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHerramientasExportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
