import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarclaseComponent } from './salvarclase.component';

describe('SalvarclaseComponent', () => {
  let component: SalvarclaseComponent;
  let fixture: ComponentFixture<SalvarclaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarclaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarclaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
