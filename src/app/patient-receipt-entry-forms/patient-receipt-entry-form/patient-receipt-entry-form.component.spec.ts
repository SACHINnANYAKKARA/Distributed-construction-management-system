import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceiptEntryFormComponent } from './patient-receipt-entry-form.component';

describe('PatientReceiptEntryFormComponent', () => {
  let component: PatientReceiptEntryFormComponent;
  let fixture: ComponentFixture<PatientReceiptEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReceiptEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceiptEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
