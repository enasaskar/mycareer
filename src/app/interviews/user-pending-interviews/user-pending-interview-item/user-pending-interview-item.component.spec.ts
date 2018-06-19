/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserPendingInterviewItemComponent } from './user-pending-interview-item.component';

describe('UserPendingInterviewItemComponent', () => {
  let component: UserPendingInterviewItemComponent;
  let fixture: ComponentFixture<UserPendingInterviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPendingInterviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPendingInterviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
