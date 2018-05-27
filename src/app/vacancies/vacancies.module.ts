import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyAddEditComponent } from './vacancy-add-edit/vacancy-add-edit.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyItemDetailsComponent } from './vacancy-item-details/vacancy-item-details.component';
import { VacancyItemComponent } from './vacancy-list/vacancy-item/vacancy-item.component';
import { VacanciesRoutingModule } from './vacancies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VacanciesRoutingModule
  ],
  declarations: [VacancyAddEditComponent, VacancyListComponent, VacancyItemDetailsComponent, VacancyItemComponent]
})
export class VacanciesModule { }