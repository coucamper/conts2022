import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarpesajeComponent } from './salvarpesaje.component';

describe('SalvarpesajeComponent', () => {
  let component: SalvarpesajeComponent;
  let fixture: ComponentFixture<SalvarpesajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarpesajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarpesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
