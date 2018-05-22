import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathAddEditComponent } from './path-add-edit.component';

describe('PathAddEditComponent', () => {
  let component: PathAddEditComponent;
  let fixture: ComponentFixture<PathAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
