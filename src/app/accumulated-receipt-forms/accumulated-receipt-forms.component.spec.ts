import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatedReceiptFormsComponent } from './accumulated-receipt-forms.component';

describe('AccumulatedReceiptFormsComponent', () => {
  let component: AccumulatedReceiptFormsComponent;
  let fixture: ComponentFixture<AccumulatedReceiptFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumulatedReceiptFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulatedReceiptFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
