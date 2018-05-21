import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewAcceptedComponent } from './interview-accepted/interview-accepted.component';
import { InterviewRejectedComponent } from './interview-rejected/interview-rejected.component';
import { InterviewEvaluationComponent } from './interview-evaluation/interview-evaluation.component';
import { InterviewShortlistComponent } from './interview-shortlist/interview-shortlist.component';
import { InterviewViewallComponent } from './interview-viewall/interview-viewall.component';
import { InterviewApplicantitemComponent } from './interview-applicantitem/interview-applicantitem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterviewsComponent, InterviewAcceptedComponent, InterviewRejectedComponent, InterviewEvaluationComponent, InterviewShortlistComponent, InterviewViewallComponent, InterviewApplicantitemComponent],
  exports: [InterviewsComponent, InterviewAcceptedComponent, InterviewRejectedComponent, InterviewEvaluationComponent, InterviewShortlistComponent, InterviewViewallComponent]
})
export class InterviewsModule { }
