import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneSkillComponent } from './one-skill/one-skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsComponent } from './skill-list/skill-details/skill-details.component';
import { SkillAddEditComponent } from './skill-add-edit/skill-add-edit.component';
import { TestOneSkillComponent } from './one-skill/test-one-skill/test-one-skill.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OneSkillComponent, SkillListComponent, SkillDetailsComponent, SkillAddEditComponent, TestOneSkillComponent]
})
export class SkillsModule { }
