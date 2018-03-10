import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInjectionEntryFormComponent } from './patient-injection-entry-form.component';

describe('PatientInjectionEntryFormComponent', () => {
  let component: PatientInjectionEntryFormComponent;
  let fixture: ComponentFixture<PatientInjectionEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInjectionEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInjectionEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
