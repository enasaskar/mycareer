/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatingItemComponent } from './rating-item.component';

describe('RatingItemComponent', () => {
  let component: RatingItemComponent;
  let fixture: ComponentFixture<RatingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
