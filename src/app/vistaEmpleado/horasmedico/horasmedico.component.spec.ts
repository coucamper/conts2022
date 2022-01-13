import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasmedicoComponent } from './horasmedico.component';

describe('HorasmedicoComponent', () => {
  let component: HorasmedicoComponent;
  let fixture: ComponentFixture<HorasmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorasmedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
