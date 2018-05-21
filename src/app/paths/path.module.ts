import { PathRoutingModule } from './path-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PathItemComponent } from './path-item/path-item.component';
import { PathListComponent } from './path-list/path-list.component';
import { PathDetaileditemComponent } from './path-detaileditem/path-detaileditem.component';
import { PathAddEditComponent } from './path-add-edit/path-add-edit.component';
import { PathsComponent } from './paths.component';

@NgModule({
    declarations: [
        PathsComponent,
        PathAddEditComponent,
        PathDetaileditemComponent,
        PathListComponent,
        PathItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PathRoutingModule
    ]
})

export class PathsModule {

}
