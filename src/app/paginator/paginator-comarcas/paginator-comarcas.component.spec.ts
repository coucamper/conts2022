import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComarcasComponent } from './paginator-comarcas.component';

describe('PaginatorComarcasComponent', () => {
  let component: PaginatorComarcasComponent;
  let fixture: ComponentFixture<PaginatorComarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
