import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarcargaComponent } from './salvarcarga.component';

describe('SalvarcargaComponent', () => {
  let component: SalvarcargaComponent;
  let fixture: ComponentFixture<SalvarcargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarcargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarcargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
