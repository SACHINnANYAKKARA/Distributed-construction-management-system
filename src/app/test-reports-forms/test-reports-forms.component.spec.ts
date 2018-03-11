import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReportsFormsComponent } from './test-reports-forms.component';

describe('TestReportsFormsComponent', () => {
  let component: TestReportsFormsComponent;
  let fixture: ComponentFixture<TestReportsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReportsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
