import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiagnosisHistoryFormListComponent } from './patient-diagnosis-history-form-list.component';

describe('PatientDiagnosisHistoryFormListComponent', () => {
  let component: PatientDiagnosisHistoryFormListComponent;
  let fixture: ComponentFixture<PatientDiagnosisHistoryFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDiagnosisHistoryFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiagnosisHistoryFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
