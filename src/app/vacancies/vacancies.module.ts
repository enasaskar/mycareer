import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyAddEditComponent } from './vacancy-add-edit/vacancy-add-edit.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyItemDetailsComponent } from './vacancy-item-details/vacancy-item-details.component';
import { VacancyItemComponent } from './vacancy-list/vacancy-item/vacancy-item.component';
import { VacanciesRoutingModule } from './vacancies-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [VacancyAddEditComponent,
                 VacancyListComponent, 
                 VacancyItemDetailsComponent,
                 VacancyItemComponent],
  exports:[
    VacanciesRoutingModule,
  
  ]
})
export class VacanciesModule { }
