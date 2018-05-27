import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VacanciesComponent } from './vacancies.component';
import { VacancyAddEditComponent } from './vacancy-add-edit/vacancy-add-edit.component';
import { VacancyItemDetailsComponent } from './vacancy-item-details/vacancy-item-details.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
 
const vacancyRoutes: Routes = [
{ path: '', component: VacancyListComponent },
{ path: 'vacancy/addvacancy', component: VacancyAddEditComponent },
{ path: 'vacancy/editvacancy', component: VacancyAddEditComponent },
{ path: 'vacancy/detailsvacancy:id', component: VacancyItemDetailsComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(vacancyRoutes)
  ],
  exports: [RouterModule]
})
export class VacanciesRoutingModule { }
