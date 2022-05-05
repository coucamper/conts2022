import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficapesajesComponent } from './graficapesajes.component';

describe('GraficapesajesComponent', () => {
  let component: GraficapesajesComponent;
  let fixture: ComponentFixture<GraficapesajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficapesajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficapesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
