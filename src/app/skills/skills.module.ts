import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { SkillItemSmallComponent } from './skill-item-small/skill-item-small.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BsDatepickerModule
  ],
  declarations: [
    SkillListComponent,
    SkillDetailsComponent,
    SkillItemSmallComponent,
    SkillUpdateComponent
],
  exports: [
    SkillListComponent,
    SkillDetailsComponent
  ]
})
export class SkillsModule { }
