import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobofferitemComponent } from './jobofferitem.component';

describe('JobofferitemComponent', () => {
  let component: JobofferitemComponent;
  let fixture: ComponentFixture<JobofferitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobofferitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobofferitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
