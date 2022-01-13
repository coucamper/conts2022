import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarcontenedorrutaComponent } from './salvarcontenedorruta.component';

describe('SalvarcontenedorrutaComponent', () => {
  let component: SalvarcontenedorrutaComponent;
  let fixture: ComponentFixture<SalvarcontenedorrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarcontenedorrutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarcontenedorrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
