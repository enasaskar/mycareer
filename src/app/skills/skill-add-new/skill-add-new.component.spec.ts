import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddNewComponent } from './skill-add-new.component';

describe('SkillAddNewComponent', () => {
  let component: SkillAddNewComponent;
  let fixture: ComponentFixture<SkillAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
