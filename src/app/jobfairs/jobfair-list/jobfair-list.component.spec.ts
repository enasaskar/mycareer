import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfairListComponent } from './jobfair-list.component';

describe('JobfairListComponent', () => {
  let component: JobfairListComponent;
  let fixture: ComponentFixture<JobfairListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobfairListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobfairListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
