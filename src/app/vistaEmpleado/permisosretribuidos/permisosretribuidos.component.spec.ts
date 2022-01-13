import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosretribuidosComponent } from './permisosretribuidos.component';

describe('PermisosretribuidosComponent', () => {
  let component: PermisosretribuidosComponent;
  let fixture: ComponentFixture<PermisosretribuidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosretribuidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosretribuidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
