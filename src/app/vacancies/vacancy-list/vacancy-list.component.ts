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
  }

  ngOnInit() {
    this.vacancyServiec.getNotDeleted().subscribe((d) => {this.vacancies = d ; });
    console.log(this.vacancies);
    const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    console.log(this.vacancies);
  }

  OnSearchSubmit(searchForm: NgForm) { }
}
