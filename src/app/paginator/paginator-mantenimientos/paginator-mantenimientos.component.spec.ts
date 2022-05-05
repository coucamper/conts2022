import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorMantenimientosComponent } from './paginator-mantenimientos.component';

describe('PaginatorMantenimientosComponent', () => {
  let component: PaginatorMantenimientosComponent;
  let fixture: ComponentFixture<PaginatorMantenimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorMantenimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorMantenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
