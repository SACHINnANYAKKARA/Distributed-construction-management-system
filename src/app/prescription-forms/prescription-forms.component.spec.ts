import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionFormsComponent } from './prescription-forms.component';

describe('PrescriptionFormsComponent', () => {
  let component: PrescriptionFormsComponent;
  let fixture: ComponentFixture<PrescriptionFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
