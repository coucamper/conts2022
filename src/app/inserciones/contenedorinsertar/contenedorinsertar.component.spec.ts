import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorinsertarComponent } from './contenedorinsertar.component';

describe('ContenedorinsertarComponent', () => {
  let component: ContenedorinsertarComponent;
  let fixture: ComponentFixture<ContenedorinsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorinsertarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorinsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
