import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacacionesempleadoComponent } from './vacacionesempleado.component';

describe('VacacionesempleadoComponent', () => {
  let component: VacacionesempleadoComponent;
  let fixture: ComponentFixture<VacacionesempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacacionesempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacacionesempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
