import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPolizasComponent } from './paginator-polizas.component';

describe('PaginatorPolizasComponent', () => {
  let component: PaginatorPolizasComponent;
  let fixture: ComponentFixture<PaginatorPolizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorPolizasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
