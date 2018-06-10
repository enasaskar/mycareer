import { OneCommentComponent } from './landing-page/reviews-view-only/comments-view-only/one-comment/one-comment.component';
import { CommentsViewOnlyComponent } from './landing-page/reviews-view-only/comments-view-only/comments-view-only.component';
import { RatingItemComponent } from './landing-page/reviews-view-only/ratings-view-only/rating-item/rating-item.component';
import { RatingsViewOnlyComponent } from './landing-page/reviews-view-only/ratings-view-only/ratings-view-only.component';
import { EnterpriseRoutingModule } from './enterprises-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { ViewOneItemComponent } from './enterprise-view-all/view-one-item/view-one-item.component';
import { EnterpriseViewAllComponent } from './enterprise-view-all/enterprise-view-all.component';
import { EnterpriseDetailsComponent } from './enterprise-details/enterprise-details.component';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';
import { EnterpriseComponent } from './enterprise.component';
import { ReviewsComponent } from './enterprise-details/reviews/reviews.component';
import { CommentsComponent } from './enterprise-details/reviews/comments/comments.component';
import { RatingComponent } from './enterprise-details/reviews/rating/rating.component';
import { CommentComponent } from './enterprise-details/reviews/comments/comment/comment.component';
import { OneItemComponent } from './enterprise-details/reviews/rating/one-item/one-item.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkExpItemComponent } from './work-experience/work-exp-item/work-exp-item.component';
import { ReviewModalContentComponent } from './enterprise-details/reviews/rating/review-modal-content/review-modal-content.component';
import { VacanciesModule } from '../vacancies/vacancies.module';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobPostingPlansComponent } from './job-posting-plans/job-posting-plans.component';
import { ReviewsViewOnlyComponent } from './landing-page/reviews-view-only/reviews-view-only.component';



@NgModule({
    declarations:
    [
        EnterpriseComponent,
        EnterpriseCreateComponent,
        EnterpriseDetailsComponent,
        EnterpriseViewAllComponent,
        ViewOneItemComponent,
        ReviewsComponent,
        CommentsComponent,
        RatingComponent,
        CommentComponent,
        OneItemComponent,
        WorkExperienceComponent,
        WorkExpItemComponent,
        ReviewModalContentComponent,
        LandingPageComponent,
        JobPostingPlansComponent,
        ReviewsViewOnlyComponent,
        RatingsViewOnlyComponent,
        RatingItemComponent,
        CommentsViewOnlyComponent,
        OneCommentComponent
],
    imports:
    [
        CommonModule,
        FormsModule,
        EnterpriseRoutingModule,
        NgbModule,
        VacanciesModule,
        RouterModule,
        ChartsModule
    ],
    exports:
    [
        WorkExperienceComponent,
        WorkExpItemComponent,
        NgbModule,
        MatDialogModule,
        BrowserAnimationsModule,
    ],
    entryComponents: [ReviewModalContentComponent]
})

export class EnterprisesModule {}
