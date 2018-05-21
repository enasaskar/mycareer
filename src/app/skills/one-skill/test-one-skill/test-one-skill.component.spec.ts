import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOneSkillComponent } from './test-one-skill.component';

describe('TestOneSkillComponent', () => {
  let component: TestOneSkillComponent;
  let fixture: ComponentFixture<TestOneSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOneSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOneSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
