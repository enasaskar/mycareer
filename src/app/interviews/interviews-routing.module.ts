import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewsComponent } from './interviews.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewViewAllComponent } from './interview-view-all/interview-view-all.component';

const interviewsRoutes: Routes = [
    {path : 'interviews', component : InterviewsComponent },
    {path : 'interviews/applicants', component : InterviewViewAllComponent },
    {path : 'interviews/accepted-cv', component : InterviewListComponent }
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
