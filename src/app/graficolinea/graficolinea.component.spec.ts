import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficolineaComponent } from './graficolinea.component';

describe('GraficolineaComponent', () => {
  let component: GraficolineaComponent;
  let fixture: ComponentFixture<GraficolineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficolineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
