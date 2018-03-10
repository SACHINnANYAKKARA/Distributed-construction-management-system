import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiagnosisHistoryFormsComponent } from './patient-diagnosis-history-forms.component';

describe('PatientDiagnosisHistoryFormsComponent', () => {
  let component: PatientDiagnosisHistoryFormsComponent;
  let fixture: ComponentFixture<PatientDiagnosisHistoryFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDiagnosisHistoryFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiagnosisHistoryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
