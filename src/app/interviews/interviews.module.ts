import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewEvaluationComponent } from './interview-evaluation/interview-evaluation.component';
import { InterviewViewallComponent } from './interview-viewall/interview-viewall.component';
import { InterviewApplicantitemComponent } from './interview-applicantitem/interview-applicantitem.component';
import { InterviewListComponent } from './interview-list/interview-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterviewsComponent, InterviewEvaluationComponent, InterviewViewallComponent, InterviewApplicantitemComponent, InterviewListComponent],
  exports: [InterviewsComponent, InterviewEvaluationComponent, InterviewViewallComponent, InterviewApplicantitemComponent, InterviewListComponent]
})
export class InterviewsModule { }
