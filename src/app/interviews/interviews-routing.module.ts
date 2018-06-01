import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewsComponent } from './interviews.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';

const interviewsRoutes: Routes = [
    {path : 'interviews', component : InterviewsComponent },
    {path : 'interviews/evaluation', component : InterviewDetailsComponent }
    
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
