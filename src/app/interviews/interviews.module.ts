import { InterviewsRoutingModule } from './interviews-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { InterviewApplicantitemComponent } from './interview-applicantitem/interview-applicantitem.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { UserPendingInterviewsComponent } from './user-pending-interviews/user-pending-interviews.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewsRoutingModule
  ],
  declarations: [
    InterviewsComponent,
    InterviewDetailsComponent,
    InterviewApplicantitemComponent,
    InterviewListComponent,
    UserPendingInterviewsComponent
],
  exports: [
    InterviewsComponent,
    InterviewDetailsComponent,
    InterviewApplicantitemComponent,
    InterviewListComponent,
    UserPendingInterviewsComponent
  ]
})
export class InterviewsModule { }
