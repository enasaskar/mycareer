import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfairDetaileditemComponent } from './jobfair-detaileditem.component';

describe('JobfairDetaileditemComponent', () => {
  let component: JobfairDetaileditemComponent;
  let fixture: ComponentFixture<JobfairDetaileditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobfairDetaileditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobfairDetaileditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
