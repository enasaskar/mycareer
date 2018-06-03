import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewViewAllComponent } from './interview-view-all.component';

describe('InterviewViewAllComponent', () => {
  let component: InterviewViewAllComponent;
  let fixture: ComponentFixture<InterviewViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
