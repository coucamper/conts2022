import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarpolizaComponent } from './salvarpoliza.component';

describe('SalvarpolizaComponent', () => {
  let component: SalvarpolizaComponent;
  let fixture: ComponentFixture<SalvarpolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarpolizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarpolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
