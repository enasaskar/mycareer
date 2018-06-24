import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateitemComponent } from './rateitem.component';

describe('RateitemComponent', () => {
  let component: RateitemComponent;
  let fixture: ComponentFixture<RateitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
