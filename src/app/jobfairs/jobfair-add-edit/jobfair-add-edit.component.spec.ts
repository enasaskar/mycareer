import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfairAddEditComponent } from './jobfair-add-edit.component';

describe('JobfairAddEditComponent', () => {
  let component: JobfairAddEditComponent;
  let fixture: ComponentFixture<JobfairAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobfairAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobfairAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
