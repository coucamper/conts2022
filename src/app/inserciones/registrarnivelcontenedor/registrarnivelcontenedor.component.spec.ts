import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarnivelcontenedorComponent } from './registrarnivelcontenedor.component';

describe('RegistrarnivelcontenedorComponent', () => {
  let component: RegistrarnivelcontenedorComponent;
  let fixture: ComponentFixture<RegistrarnivelcontenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarnivelcontenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarnivelcontenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
