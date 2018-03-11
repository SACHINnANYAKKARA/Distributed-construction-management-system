import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroscopyTestFormComponent } from './gastroscopy-test-form.component';

describe('GastroscopyTestFormComponent', () => {
  let component: GastroscopyTestFormComponent;
  let fixture: ComponentFixture<GastroscopyTestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastroscopyTestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastroscopyTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
