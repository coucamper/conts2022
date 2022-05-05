import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorEmpleadosComponent } from './paginator-empleados.component';

describe('PaginatorEmpleadosComponent', () => {
  let component: PaginatorEmpleadosComponent;
  let fixture: ComponentFixture<PaginatorEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
