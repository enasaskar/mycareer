import { EnterpriseRoutingModule } from './enterprises-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
        ReviewModalContentComponent
    
    ],
    imports:
    [
        CommonModule,
        FormsModule,
        EnterpriseRoutingModule,
        NgbModule,
        VacanciesModule,
        RouterModule
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
