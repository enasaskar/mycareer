import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule,
} from '@angular/material';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BarRatingModule } from 'ngx-bar-rating';

import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailsPopupComponent } from './skill-details-popup/skill-details-popup.component';
import { SkillItemSmallComponent } from './skill-item-small/skill-item-small.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillDetailsEditComponent } from './skill-details-edit/skill-details-edit.component';
import { SkillPopupComponent } from './skill-popup/skill-popup.component';
import { SkillAddNewComponent } from './skill-add-new/skill-add-new.component';
import { SkillListDragScrollComponent } from './skill-list-drag-scroll/skill-list-drag-scroll.component';




@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule,
    // SkillItemSmallComponent,
    RouterModule.forChild(
    [
      {path: 'skills', component: SkillListComponent , children: [
        {path: 'edit', component: SkillDetailsEditComponent}
      ] },
      {path: 'oneSkill' , component: SkillItemSmallComponent},

      // {path: 'edit', component: SkillDetailsEditComponent}
      // {path: 'skillPopup', component: SkillPopupComponent, children: [
      // {path: '', component: SkillDetailsComponent},
      // {path: 'edit', component: SkillDetailsEditComponent}
      // ]},
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        DragScrollModule,
        BarRatingModule,
    DragScrollModule
  ],
  declarations: [
    SkillListComponent,
    SkillDetailsPopupComponent,
    SkillItemSmallComponent,
    SkillUpdateComponent,
    SkillDetailsEditComponent,
    SkillPopupComponent,
    SkillAddNewComponent,
    SkillListDragScrollComponent
],
  exports: [
    SkillListComponent,
    SkillDetailsPopupComponent,
    SkillItemSmallComponent,
    SkillDetailsEditComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SkillListDragScrollComponent,
})
