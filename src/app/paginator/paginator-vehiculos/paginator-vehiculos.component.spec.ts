import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorVehiculosComponent } from './paginator-vehiculos.component';

describe('PaginatorVehiculosComponent', () => {
  let component: PaginatorVehiculosComponent;
  let fixture: ComponentFixture<PaginatorVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
