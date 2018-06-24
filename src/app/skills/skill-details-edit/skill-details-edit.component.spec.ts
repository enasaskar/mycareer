import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsEditComponent } from './skill-details-edit.component';

describe('SkillDetailsEditComponent', () => {
  let component: SkillDetailsEditComponent;
  let fixture: ComponentFixture<SkillDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
