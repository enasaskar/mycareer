import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { SkillItemSmallComponent } from './skill-item-small/skill-item-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SkillListComponent,
    SkillDetailsComponent,
    SkillItemSmallComponent
],
  exports: [
    SkillListComponent,
    SkillDetailsComponent
  ]
})
export class SkillsModule { }
