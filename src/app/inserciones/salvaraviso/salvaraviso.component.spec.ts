import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaravisoComponent } from './salvaraviso.component';

describe('SalvaravisoComponent', () => {
  let component: SalvaravisoComponent;
  let fixture: ComponentFixture<SalvaravisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvaravisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvaravisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
