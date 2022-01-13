import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarvehiculoComponent } from './salvarvehiculo.component';

describe('SalvarvehiculoComponent', () => {
  let component: SalvarvehiculoComponent;
  let fixture: ComponentFixture<SalvarvehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarvehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
