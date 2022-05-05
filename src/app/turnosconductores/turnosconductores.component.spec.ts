import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosconductoresComponent } from './turnosconductores.component';

describe('TurnosconductoresComponent', () => {
  let component: TurnosconductoresComponent;
  let fixture: ComponentFixture<TurnosconductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosconductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosconductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
