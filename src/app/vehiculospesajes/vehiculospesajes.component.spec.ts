import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculospesajesComponent } from './vehiculospesajes.component';

describe('VehiculospesajesComponent', () => {
  let component: VehiculospesajesComponent;
  let fixture: ComponentFixture<VehiculospesajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculospesajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculospesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
