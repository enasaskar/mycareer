import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewApplicantitemComponent } from './interview-applicantitem.component';

describe('InterviewApplicantitemComponent', () => {
  let component: InterviewApplicantitemComponent;
  let fixture: ComponentFixture<InterviewApplicantitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewApplicantitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewApplicantitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
