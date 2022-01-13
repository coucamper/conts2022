import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionesVehiculoComponent } from './revisiones-vehiculo.component';

describe('RevisionesVehiculoComponent', () => {
  let component: RevisionesVehiculoComponent;
  let fixture: ComponentFixture<RevisionesVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionesVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionesVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
