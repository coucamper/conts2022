import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedoresrutasComponent } from './contenedoresrutas.component';

describe('ContenedoresrutasComponent', () => {
  let component: ContenedoresrutasComponent;
  let fixture: ComponentFixture<ContenedoresrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedoresrutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedoresrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
