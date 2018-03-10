import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceiptQueryFormComponent } from './patient-receipt-query-form.component';

describe('PatientReceiptQueryFormComponent', () => {
  let component: PatientReceiptQueryFormComponent;
  let fixture: ComponentFixture<PatientReceiptQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReceiptQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceiptQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
