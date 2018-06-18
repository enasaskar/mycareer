import { InterviewsRoutingModule } from './interviews-routing.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewApplicantitemComponent } from './interview-applicantitem/interview-applicantitem.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { UserPendingInterviewsComponent } from './user-pending-interviews/user-pending-interviews.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';
import { CalendarModule } from 'angular-calendar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { InterviewViewAllComponent } from './interview-view-all/interview-view-all.component';
import { ViewOneItemComponent } from './interview-view-all/view-one-item/view-one-item.component';
// tslint:disable-next-line:max-line-length
import { UserPendingInterviewItemComponent } from './user-pending-interviews/user-pending-interview-item/user-pending-interview-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InterviewsRoutingModule,
    CalendarModule.forRoot(),
    CalendarUtilsModule,
    RatingModule.forRoot()
  ],
  declarations: [
    InterviewsComponent,
    InterviewViewAllComponent,
    InterviewApplicantitemComponent,
    InterviewListComponent,
    UserPendingInterviewsComponent,
    UserPendingInterviewItemComponent,
    CalendarComponent,
    ViewOneItemComponent,
],
  exports: [
    InterviewsComponent,
    InterviewViewAllComponent,
    InterviewApplicantitemComponent,
    InterviewListComponent,
    UserPendingInterviewsComponent,
    UserPendingInterviewItemComponent,
    CalendarComponent
  ]
})
export class InterviewsModule { }
