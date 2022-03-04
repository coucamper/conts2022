import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarvacacionesempleadoComponent } from './salvarvacacionesempleado.component';

describe('SalvarvacacionesempleadoComponent', () => {
  let component: SalvarvacacionesempleadoComponent;
  let fixture: ComponentFixture<SalvarvacacionesempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarvacacionesempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarvacacionesempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
