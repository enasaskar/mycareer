import { InterviewsRoutingModule } from './interviews-routing.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { InterviewApplicantitemComponent } from './interview-applicantitem/interview-applicantitem.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { UserPendingInterviewsComponent } from './user-pending-interviews/user-pending-interviews.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    CalendarModule.forRoot(),
    CalendarUtilsModule
  ],
  declarations: [
    InterviewsComponent,
    InterviewDetailsComponent,
    InterviewApplicantitemComponent,
    InterviewListComponent,
    UserPendingInterviewsComponent,
    CalendarComponent,
],
  exports: [
    InterviewsComponent,
    InterviewDetailsComponent,
    InterviewApplicantitemComponent,
    InterviewListComponent,
    UserPendingInterviewsComponent,
    CalendarComponent
  ]
})
export class InterviewsModule { }
