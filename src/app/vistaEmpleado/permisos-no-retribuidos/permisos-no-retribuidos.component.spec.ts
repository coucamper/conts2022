import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosNoRetribuidosComponent } from './permisos-no-retribuidos.component';

describe('PermisosNoRetribuidosComponent', () => {
  let component: PermisosNoRetribuidosComponent;
  let fixture: ComponentFixture<PermisosNoRetribuidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosNoRetribuidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosNoRetribuidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
