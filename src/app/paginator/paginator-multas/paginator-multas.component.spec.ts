import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorMultasComponent } from './paginator-multas.component';

describe('PaginatorMultasComponent', () => {
  let component: PaginatorMultasComponent;
  let fixture: ComponentFixture<PaginatorMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorMultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
