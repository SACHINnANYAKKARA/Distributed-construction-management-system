import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceiptQueryFormListComponent } from './patient-receipt-query-form-list.component';

describe('PatientReceiptQueryFormListComponent', () => {
  let component: PatientReceiptQueryFormListComponent;
  let fixture: ComponentFixture<PatientReceiptQueryFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReceiptQueryFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceiptQueryFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
