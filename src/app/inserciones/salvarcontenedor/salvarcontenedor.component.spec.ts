import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarcontenedorComponent } from './salvarcontenedor.component';

describe('SalvarcontenedorComponent', () => {
  let component: SalvarcontenedorComponent;
  let fixture: ComponentFixture<SalvarcontenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarcontenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarcontenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
