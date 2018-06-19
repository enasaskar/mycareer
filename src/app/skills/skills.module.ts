import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsPopupComponent } from './skill-details-popup/skill-details-popup.component';
import { SkillItemSmallComponent } from './skill-item-small/skill-item-small.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillDetailsEditComponent } from './skill-details-edit/skill-details-edit.component';
import { SkillPopupComponent } from './skill-popup/skill-popup.component';
import { SkillListDragScrollComponent } from './skill-list-drag-scroll/skill-list-drag-scroll.component';

import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BsDatepickerModule,
    // SkillItemSmallComponent,
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
    ]),
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
  ],
  declarations: [
    SkillListComponent,
    SkillDetailsPopupComponent,
    SkillItemSmallComponent,
    SkillUpdateComponent,
    SkillDetailsEditComponent,
    SkillPopupComponent,
    SkillListDragScrollComponent
],
  exports: [
    SkillListComponent,
    SkillDetailsPopupComponent,
    SkillItemSmallComponent,
    SkillDetailsEditComponent,
    SkillListDragScrollComponent,
  ]
})
export class SkillsModule { }
