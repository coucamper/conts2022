import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarcategoriaComponent } from './salvarcategoria.component';

describe('SalvarcategoriaComponent', () => {
  let component: SalvarcategoriaComponent;
  let fixture: ComponentFixture<SalvarcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
