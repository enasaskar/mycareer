import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillListDragScrollComponent } from './skill-list-drag-scroll.component';

describe('SkillListDragScrollComponent', () => {
  let component: SkillListDragScrollComponent;
  let fixture: ComponentFixture<SkillListDragScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillListDragScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillListDragScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
