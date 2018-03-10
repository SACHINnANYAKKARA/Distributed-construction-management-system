import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInjectionEntryFormListComponent } from './patient-injection-entry-form-list.component';

describe('PatientInjectionEntryFormListComponent', () => {
  let component: PatientInjectionEntryFormListComponent;
  let fixture: ComponentFixture<PatientInjectionEntryFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInjectionEntryFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInjectionEntryFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
