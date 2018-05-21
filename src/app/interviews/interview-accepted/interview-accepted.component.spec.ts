import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAcceptedComponent } from './interview-accepted.component';

describe('InterviewAcceptedComponent', () => {
  let component: InterviewAcceptedComponent;
  let fixture: ComponentFixture<InterviewAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
