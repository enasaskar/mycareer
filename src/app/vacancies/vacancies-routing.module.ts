import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VacanciesComponent } from './vacancies.component';
import { VacancyAddEditComponent } from './vacancy-add-edit/vacancy-add-edit.component';
import { VacancyItemDetailsComponent } from './vacancy-item-details/vacancy-item-details.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

const vacancyRoutes: Routes = [
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/addvacancy', component: VacancyAddEditComponent },
  { path: 'vacancies/:search', component: VacancyListComponent },
  { path: 'vacancies/editvacancy/:id', component: VacancyAddEditComponent },
  { path: 'vacancies/vacancydetails/:id', component: VacancyItemDetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(vacancyRoutes)
  ],
  exports: [RouterModule]
})
export class VacanciesRoutingModule { }
