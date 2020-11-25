import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewsComponent } from './interviews.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewViewAllComponent } from './interview-view-all/interview-view-all.component';

const interviewsRoutes: Routes = [
    {path : 'interviews/applicants/:id', component : InterviewViewAllComponent },
    {path : 'interviews/:id/:name', component : InterviewsComponent },
    // {path : 'interviews', component : InterviewsComponent },
    
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
