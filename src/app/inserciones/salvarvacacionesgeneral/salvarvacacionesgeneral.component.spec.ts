import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarvacacionesgeneralComponent } from './salvarvacacionesgeneral.component';

describe('SalvarvacacionesgeneralComponent', () => {
  let component: SalvarvacacionesgeneralComponent;
  let fixture: ComponentFixture<SalvarvacacionesgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarvacacionesgeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarvacacionesgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
