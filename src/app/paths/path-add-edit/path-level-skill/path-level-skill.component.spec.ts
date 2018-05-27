import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLevelSkillComponent } from './path-level-skill.component';

describe('PathLevelSkillComponent', () => {
  let component: PathLevelSkillComponent;
  let fixture: ComponentFixture<PathLevelSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathLevelSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathLevelSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
