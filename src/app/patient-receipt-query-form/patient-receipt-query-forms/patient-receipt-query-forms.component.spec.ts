import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceiptQueryFormsComponent } from './patient-receipt-query-forms.component';

describe('PatientReceiptQueryFormsComponent', () => {
  let component: PatientReceiptQueryFormsComponent;
  let fixture: ComponentFixture<PatientReceiptQueryFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReceiptQueryFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceiptQueryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
