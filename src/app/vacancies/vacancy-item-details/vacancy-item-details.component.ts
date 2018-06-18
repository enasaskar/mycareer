import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Enterprise } from '../../shared/classes/enterprise';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vacancy-item-details',
  templateUrl: './vacancy-item-details.component.html',
  styleUrls: ['./vacancy-item-details.component.css']
})
export class VacancyItemDetailsComponent implements OnInit {

  vacancies: Vacancy[];
  enterprises: Enterprise[];
  searchWord: any;

  constructor(private vacancyServiec: VacancyService, private enterpriseService: EnterpriseService) {
    vacancyServiec.onDelete.subscribe(
      (e: Vacancy) => { vacancyServiec.deleteVacancy(e); }
    );
   }
  ngOnInit() {
    this.vacancies = this.vacancyServiec.getAll();
    const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
   console.log(this.enterprises);
  }
  OnSearchSubmit(searchForm: NgForm) {}

}
