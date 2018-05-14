import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfairItemComponent } from './jobfair-item.component';

describe('JobfairItemComponent', () => {
  let component: JobfairItemComponent;
  let fixture: ComponentFixture<JobfairItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobfairItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobfairItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
