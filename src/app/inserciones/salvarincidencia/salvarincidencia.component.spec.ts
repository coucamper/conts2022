import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarincidenciaComponent } from './salvarincidencia.component';

describe('SalvarincidenciaComponent', () => {
  let component: SalvarincidenciaComponent;
  let fixture: ComponentFixture<SalvarincidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarincidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarincidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
