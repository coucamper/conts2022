import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveriasveComponent } from './averiasve.component';

describe('AveriasveComponent', () => {
  let component: AveriasveComponent;
  let fixture: ComponentFixture<AveriasveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveriasveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AveriasveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
