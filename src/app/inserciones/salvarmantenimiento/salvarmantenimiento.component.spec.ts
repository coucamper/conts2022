import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarmantenimientoComponent } from './salvarmantenimiento.component';

describe('SalvarmantenimientoComponent', () => {
  let component: SalvarmantenimientoComponent;
  let fixture: ComponentFixture<SalvarmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarmantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
