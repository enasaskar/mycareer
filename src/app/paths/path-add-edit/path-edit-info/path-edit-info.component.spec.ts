import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathEditInfoComponent } from './path-edit-info.component';

describe('PathEditInfoComponent', () => {
  let component: PathEditInfoComponent;
  let fixture: ComponentFixture<PathEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
