import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesrutaComponent } from './nivelesruta.component';

describe('NivelesrutaComponent', () => {
  let component: NivelesrutaComponent;
  let fixture: ComponentFixture<NivelesrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelesrutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelesrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
