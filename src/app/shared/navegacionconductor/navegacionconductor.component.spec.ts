import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionconductorComponent } from './navegacionconductor.component';

describe('NavegacionconductorComponent', () => {
  let component: NavegacionconductorComponent;
  let fixture: ComponentFixture<NavegacionconductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionconductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionconductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
