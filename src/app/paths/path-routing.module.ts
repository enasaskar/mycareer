import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathListComponent } from './path-list/path-list.component';
import { PathDetaileditemComponent } from './path-detaileditem/path-detaileditem.component';
import { PathAddEditComponent } from './path-add-edit/path-add-edit.component';

const pathRoutes: Routes = [
    {path : 'paths/profile/:id', component: PathDetaileditemComponent},
    {path : 'paths/list' , component : PathListComponent},
    {path : 'paths/edit/:id', component : PathAddEditComponent},
    {path : 'paths/add', component : PathAddEditComponent},
    {path : 'paths', component : PathListComponent }
];

@NgModule({

    imports: [
        RouterModule.forChild(pathRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class PathRoutingModule {

}
