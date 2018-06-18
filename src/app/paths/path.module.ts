import { PathRoutingModule } from './path-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { PathItemComponent } from './path-item/path-item.component';
import { PathListComponent } from './path-list/path-list.component';
import { PathDetaileditemComponent, ConfirmDeletePopup } from './path-detaileditem/path-detaileditem.component';
import { PathAddEditComponent } from './path-add-edit/path-add-edit.component';
import { PathsComponent } from './paths.component';
import { PathLevelSkillComponent } from './path-add-edit/path-level-skill/path-level-skill.component';
import { PathEditInfoComponent, SuccessAddPopup } from './path-add-edit/path-edit-info/path-edit-info.component';
import { ListComponent } from './path-list/list/list.component';
import { SkillsModule } from '../skills/skills.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  } from '@angular/material';
import { EnterprisesModule } from '../enterprise/enterprises.module';

@NgModule({
    declarations: [
        PathsComponent,
        PathAddEditComponent,
        PathDetaileditemComponent,
        PathListComponent,
        PathItemComponent,
        PathLevelSkillComponent,
        PathEditInfoComponent,
        ListComponent,
        SuccessAddPopup,
        ConfirmDeletePopup,
        ],
    entryComponents: [
        SuccessAddPopup,
        ConfirmDeletePopup,

    ],
    imports: [
        CommonModule,
        FormsModule,
        PathRoutingModule,
        SkillsModule,
        EnterprisesModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    exports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ]
})

export class PathsModule {

}
