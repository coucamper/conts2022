import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarempleadoComponent } from './salvarempleado.component';

describe('SalvarempleadoComponent', () => {
  let component: SalvarempleadoComponent;
  let fixture: ComponentFixture<SalvarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
