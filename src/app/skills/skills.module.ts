import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsPopupComponent } from './skill-details-popup/skill-details-popup.component';
import { SkillItemSmallComponent } from './skill-item-small/skill-item-small.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillDetailsEditComponent } from './skill-details-edit/skill-details-edit.component';
import { SkillPopupComponent } from './skill-popup/skill-popup.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BsDatepickerModule,
    RouterModule.forChild(
    [
      {path: 'skills', component: SkillListComponent , children: [
        // {path: '', component: SkillDetailsPopupComponent},
        {path: 'edit', component: SkillDetailsEditComponent}
      ] },
      {path: 'oneSkill' , component: SkillItemSmallComponent},
      // {path: '', component: SkillDetailsPopupComponent},

      // {path: 'edit', component: SkillDetailsEditComponent}
      // {path: 'skillPopup', component: SkillPopupComponent, children: [
      // {path: '', component: SkillDetailsComponent},
      // {path: 'edit', component: SkillDetailsEditComponent}
      // ]},
    ])
  ],
  declarations: [
    SkillListComponent,
    SkillDetailsPopupComponent,
    SkillItemSmallComponent,
    SkillUpdateComponent,
    SkillDetailsEditComponent,
    SkillPopupComponent
],
  exports: [
    SkillListComponent,
    SkillDetailsPopupComponent,
    SkillDetailsEditComponent
  ]
})
export class SkillsModule { }
