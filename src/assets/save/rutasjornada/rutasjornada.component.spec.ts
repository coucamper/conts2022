import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasjornadaComponent } from './rutasjornada.component';

describe('RutasjornadaComponent', () => {
  let component: RutasjornadaComponent;
  let fixture: ComponentFixture<RutasjornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasjornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasjornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
