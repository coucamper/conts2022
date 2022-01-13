import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesajesconductorComponent } from './pesajesconductor.component';

describe('PesajesconductorComponent', () => {
  let component: PesajesconductorComponent;
  let fixture: ComponentFixture<PesajesconductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesajesconductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesajesconductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
