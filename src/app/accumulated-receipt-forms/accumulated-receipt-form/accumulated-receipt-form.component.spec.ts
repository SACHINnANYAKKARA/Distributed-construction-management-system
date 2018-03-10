import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatedReceiptFormComponent } from './accumulated-receipt-form.component';

describe('AccumulatedReceiptFormComponent', () => {
  let component: AccumulatedReceiptFormComponent;
  let fixture: ComponentFixture<AccumulatedReceiptFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumulatedReceiptFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulatedReceiptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
