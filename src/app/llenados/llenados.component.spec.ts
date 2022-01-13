import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenadosComponent } from './llenados.component';

describe('LlenadosComponent', () => {
  let component: LlenadosComponent;
  let fixture: ComponentFixture<LlenadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlenadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
