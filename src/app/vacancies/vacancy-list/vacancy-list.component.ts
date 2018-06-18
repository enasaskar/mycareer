import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { Enterprise } from '../../shared/classes/enterprise';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
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

  OnSearchSubmit(searchForm: NgForm) { }
}
