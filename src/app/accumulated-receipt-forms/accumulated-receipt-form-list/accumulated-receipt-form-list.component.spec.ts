import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatedReceiptFormListComponent } from './accumulated-receipt-form-list.component';

describe('AccumulatedReceiptFormListComponent', () => {
  let component: AccumulatedReceiptFormListComponent;
  let fixture: ComponentFixture<AccumulatedReceiptFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumulatedReceiptFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulatedReceiptFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
