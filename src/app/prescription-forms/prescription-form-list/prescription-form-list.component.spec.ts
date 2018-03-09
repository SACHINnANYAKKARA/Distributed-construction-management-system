import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionFormListComponent } from './prescription-form-list.component';

describe('PrescriptionFormListComponent', () => {
  let component: PrescriptionFormListComponent;
  let fixture: ComponentFixture<PrescriptionFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
