import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroscopyTestFormsListComponent } from './gastroscopy-test-forms-list.component';

describe('GastroscopyTestFormsListComponent', () => {
  let component: GastroscopyTestFormsListComponent;
  let fixture: ComponentFixture<GastroscopyTestFormsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastroscopyTestFormsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastroscopyTestFormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
