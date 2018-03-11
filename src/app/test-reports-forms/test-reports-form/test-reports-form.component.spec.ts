import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReportsFormComponent } from './test-reports-form.component';

describe('TestReportsFormComponent', () => {
  let component: TestReportsFormComponent;
  let fixture: ComponentFixture<TestReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
