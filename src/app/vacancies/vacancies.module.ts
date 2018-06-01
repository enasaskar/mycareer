import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VacancyAddEditComponent } from './vacancy-add-edit/vacancy-add-edit.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyItemDetailsComponent } from './vacancy-item-details/vacancy-item-details.component';
import { VacancyItemComponent } from './vacancy-list/vacancy-item/vacancy-item.component';
import { VacanciesRoutingModule } from './vacancies-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPendingVacanciesComponent } from './user-pending-vacancies/user-pending-vacancies.component';
import { UserJobOffersComponent } from './user-jobOffers/user-jobOffers.component';

@NgModule({
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations:
  [
    VacancyAddEditComponent,
    VacancyListComponent,
    VacancyItemDetailsComponent,
    VacancyItemComponent,
    UserPendingVacanciesComponent
,
    UserJobOffersComponent
],
  exports:
  [
    VacanciesRoutingModule,
    UserPendingVacanciesComponent,
    UserJobOffersComponent,
    VacancyListComponent,
    VacancyItemComponent
  ]
})
export class VacanciesModule { }
