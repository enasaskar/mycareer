import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewsComponent } from './interviews.component';

const interviewsRoutes: Routes = [
    {path : 'interviews', component : InterviewsComponent } 
];

@NgModule({

    imports: [
        RouterModule.forChild(interviewsRoutes)
    ],

    exports: [
        RouterModule
    ]

})

export class InterviewsRoutingModule {}
