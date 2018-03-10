import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceiptEntryFormsComponent } from './patient-receipt-entry-forms.component';

describe('PatientReceiptEntryFormsComponent', () => {
  let component: PatientReceiptEntryFormsComponent;
  let fixture: ComponentFixture<PatientReceiptEntryFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReceiptEntryFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceiptEntryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
