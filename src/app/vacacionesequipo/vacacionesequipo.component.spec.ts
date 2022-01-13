import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacacionesequipoComponent } from './vacacionesequipo.component';

describe('VacacionesequipoComponent', () => {
  let component: VacacionesequipoComponent;
  let fixture: ComponentFixture<VacacionesequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacacionesequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacacionesequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
