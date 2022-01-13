import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenadomodalComponent } from './llenadomodal.component';

describe('LlenadomodalComponent', () => {
  let component: LlenadomodalComponent;
  let fixture: ComponentFixture<LlenadomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenadomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlenadomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
