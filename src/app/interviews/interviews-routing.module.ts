import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewViewallComponent } from './interview-viewall/interview-viewall.component';

const interviewsRoutes: Routes = [
    {path : 'interviews', component : InterviewViewallComponent } 
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
