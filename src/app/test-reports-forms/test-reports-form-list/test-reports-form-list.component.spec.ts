import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReportsFormListComponent } from './test-reports-form-list.component';

describe('TestReportsFormListComponent', () => {
  let component: TestReportsFormListComponent;
  let fixture: ComponentFixture<TestReportsFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReportsFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportsFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
