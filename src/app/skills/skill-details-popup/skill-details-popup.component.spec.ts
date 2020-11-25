import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsPopupComponent } from './skill-details-popup.component';

describe('SkillDetailsComponent', () => {
  let component: SkillDetailsPopupComponent;
  let fixture: ComponentFixture<SkillDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
