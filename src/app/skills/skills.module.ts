import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { SkillAddEditComponent } from './skill-add-edit/skill-add-edit.component';
import { SkillItemSmallComponent } from './skill-item-small/skill-item-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SkillListComponent,
    SkillDetailsComponent,
    SkillAddEditComponent,
    SkillItemSmallComponent
],
  exports: [
    SkillListComponent,
    SkillDetailsComponent,
    SkillAddEditComponent
  ]
})
export class SkillsModule { }
