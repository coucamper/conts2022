import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPesajesComponent } from './paginator-pesajes.component';

describe('PaginatorPesajesComponent', () => {
  let component: PaginatorPesajesComponent;
  let fixture: ComponentFixture<PaginatorPesajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorPesajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorPesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
