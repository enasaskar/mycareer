import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddEditComponent } from './skill-add-edit.component';

describe('SkillAddEditComponent', () => {
  let component: SkillAddEditComponent;
  let fixture: ComponentFixture<SkillAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
