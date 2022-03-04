import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondermensajeComponent } from './respondermensaje.component';

describe('RespondermensajeComponent', () => {
  let component: RespondermensajeComponent;
  let fixture: ComponentFixture<RespondermensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondermensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondermensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
