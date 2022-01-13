import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarrutaComponent } from './salvarruta.component';

describe('SalvarrutaComponent', () => {
  let component: SalvarrutaComponent;
  let fixture: ComponentFixture<SalvarrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarrutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
