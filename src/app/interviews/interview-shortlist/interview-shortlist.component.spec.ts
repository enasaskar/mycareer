import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewShortlistComponent } from './interview-shortlist.component';

describe('InterviewShortlistComponent', () => {
  let component: InterviewShortlistComponent;
  let fixture: ComponentFixture<InterviewShortlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewShortlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewShortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
