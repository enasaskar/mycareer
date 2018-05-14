import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfairsComponent } from './jobfairs.component';

describe('JobfairsComponent', () => {
  let component: JobfairsComponent;
  let fixture: ComponentFixture<JobfairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobfairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobfairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
