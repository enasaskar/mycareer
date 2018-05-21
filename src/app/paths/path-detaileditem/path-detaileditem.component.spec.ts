import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDetaileditemComponent } from './path-detaileditem.component';

describe('PathDetaileditemComponent', () => {
  let component: PathDetaileditemComponent;
  let fixture: ComponentFixture<PathDetaileditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathDetaileditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathDetaileditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
