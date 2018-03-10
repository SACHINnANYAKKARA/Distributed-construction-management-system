import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiagnosisHistoryFormComponent } from './patient-diagnosis-history-form.component';

describe('PatientDiagnosisHistoryFormComponent', () => {
  let component: PatientDiagnosisHistoryFormComponent;
  let fixture: ComponentFixture<PatientDiagnosisHistoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDiagnosisHistoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiagnosisHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
