import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInjectionEntryFormsComponent } from './patient-injection-entry-forms.component';

describe('PatientInjectionEntryFormsComponent', () => {
  let component: PatientInjectionEntryFormsComponent;
  let fixture: ComponentFixture<PatientInjectionEntryFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInjectionEntryFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInjectionEntryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
