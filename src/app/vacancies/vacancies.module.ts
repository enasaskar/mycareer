import { VacanciesComponent } from './vacancies.component';
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
import { EntrepriseVacanciesComponent } from './entreprise-vacancies/entreprise-vacancies.component';
import { EnterpriseVacancyItemComponent } from './entreprise-vacancies/enterprise-vacancy-item/enterprise-vacancy-item.component';
import { EntrepriseVacanciesOwmComponent } from './entreprise-vacancies-own/entreprise-vacancies-own.component';
// tslint:disable-next-line:max-line-length
import { EnterpriseVacancyItemOwnComponent } from './entreprise-vacancies-own/enterprise-vacancy-item/enterprise-vacancy-own-item.component';

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
    UserPendingVacanciesComponent,
    UserJobOffersComponent,
    EntrepriseVacanciesComponent,
    EnterpriseVacancyItemComponent,
    VacanciesComponent,
    EntrepriseVacanciesOwmComponent,
    EnterpriseVacancyItemOwnComponent
],
  exports:
  [
    VacanciesRoutingModule,
    UserPendingVacanciesComponent,
    UserJobOffersComponent,
    EntrepriseVacanciesComponent,
    EnterpriseVacancyItemComponent
  ]
})
export class VacanciesModule { }
