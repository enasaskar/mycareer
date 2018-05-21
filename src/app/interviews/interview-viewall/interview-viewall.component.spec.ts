import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewViewallComponent } from './interview-viewall.component';

describe('InterviewViewallComponent', () => {
  let component: InterviewViewallComponent;
  let fixture: ComponentFixture<InterviewViewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewViewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
