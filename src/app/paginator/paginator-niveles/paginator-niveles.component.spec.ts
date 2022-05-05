import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorNivelesComponent } from './paginator-niveles.component';

describe('PaginatorNivelesComponent', () => {
  let component: PaginatorNivelesComponent;
  let fixture: ComponentFixture<PaginatorNivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorNivelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorNivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
