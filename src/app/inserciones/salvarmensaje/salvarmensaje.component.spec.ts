import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarmensajeComponent } from './salvarmensaje.component';

describe('SalvarmensajeComponent', () => {
  let component: SalvarmensajeComponent;
  let fixture: ComponentFixture<SalvarmensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarmensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarmensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
