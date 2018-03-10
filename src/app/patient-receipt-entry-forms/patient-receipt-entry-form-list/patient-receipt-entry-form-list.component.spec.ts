import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceiptEntryFormListComponent } from './patient-receipt-entry-form-list.component';

describe('PatientReceiptEntryFormListComponent', () => {
  let component: PatientReceiptEntryFormListComponent;
  let fixture: ComponentFixture<PatientReceiptEntryFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReceiptEntryFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceiptEntryFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
