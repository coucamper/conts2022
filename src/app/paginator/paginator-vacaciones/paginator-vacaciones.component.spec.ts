import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorVacacionesComponent } from './paginator-vacaciones.component';

describe('PaginatorVacacionesComponent', () => {
  let component: PaginatorVacacionesComponent;
  let fixture: ComponentFixture<PaginatorVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorVacacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
