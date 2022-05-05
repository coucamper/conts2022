import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarmultaComponent } from './salvarmulta.component';

describe('SalvarmultaComponent', () => {
  let component: SalvarmultaComponent;
  let fixture: ComponentFixture<SalvarmultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarmultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarmultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
