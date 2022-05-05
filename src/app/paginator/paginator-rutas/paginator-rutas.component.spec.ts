import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorRutasComponent } from './paginator-rutas.component';

describe('PaginatorRutasComponent', () => {
  let component: PaginatorRutasComponent;
  let fixture: ComponentFixture<PaginatorRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorRutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
