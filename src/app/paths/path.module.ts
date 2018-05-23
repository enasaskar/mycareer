import { PathRoutingModule } from './path-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PathItemComponent } from './path-item/path-item.component';
import { PathListComponent } from './path-list/path-list.component';
import { PathDetaileditemComponent } from './path-detaileditem/path-detaileditem.component';
import { PathAddEditComponent } from './path-add-edit/path-add-edit.component';
import { PathsComponent } from './paths.component';
import { PathLevelSkillComponent } from './path-add-edit/path-level-skill/path-level-skill.component';
import { PathEditInfoComponent } from './path-add-edit/path-edit-info/path-edit-info.component';

@NgModule({
    declarations: [
        PathsComponent,
        PathAddEditComponent,
        PathDetaileditemComponent,
        PathListComponent,
        PathItemComponent,
        PathLevelSkillComponent,
        PathEditInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PathRoutingModule
    ]
})

export class PathsModule {

}
