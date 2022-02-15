import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarcontenedorComponent } from './asociarcontenedor.component';

describe('AsociarcontenedorComponent', () => {
  let component: AsociarcontenedorComponent;
  let fixture: ComponentFixture<AsociarcontenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarcontenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarcontenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
