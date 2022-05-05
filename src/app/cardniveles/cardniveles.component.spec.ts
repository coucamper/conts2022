import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardnivelesComponent } from './cardniveles.component';

describe('CardnivelesComponent', () => {
  let component: CardnivelesComponent;
  let fixture: ComponentFixture<CardnivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardnivelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardnivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
