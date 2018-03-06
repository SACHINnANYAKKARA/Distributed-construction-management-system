import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagListComponent } from './bag-list.component';

describe('BagListComponent', () => {
  let component: BagListComponent;
  let fixture: ComponentFixture<BagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
