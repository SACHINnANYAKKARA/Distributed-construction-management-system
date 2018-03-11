import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroscopyTestFormsComponent } from './gastroscopy-test-forms.component';

describe('GastroscopyTestFormsComponent', () => {
  let component: GastroscopyTestFormsComponent;
  let fixture: ComponentFixture<GastroscopyTestFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastroscopyTestFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastroscopyTestFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
