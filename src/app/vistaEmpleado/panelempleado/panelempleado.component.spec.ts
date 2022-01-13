import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelempleadoComponent } from './panelempleado.component';

describe('PanelempleadoComponent', () => {
  let component: PanelempleadoComponent;
  let fixture: ComponentFixture<PanelempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
