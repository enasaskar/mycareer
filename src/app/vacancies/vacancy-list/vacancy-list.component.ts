import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { Enterprise } from '../../shared/classes/enterprise';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  enterprise: Enterprise;
  vacancies: Vacancy[];
  enterprises = new Array<Enterprise>();
  searchtext: string;
  constructor(private vacancyServiec: VacancyService, 
    private enterpriseService: EnterpriseService , private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const searchtext = this.activateRoute.snapshot.params['search'];
   this.searchtext = searchtext;

    if (searchtext) {
       this.enterprise = this.enterpriseService.getByName(searchtext);
       this.vacancyServiec.getVacanciesByEnterpriseId(this.enterprise.id).subscribe((d) => {this.vacancies = d ; });
      //  this.vacancyServiec.getVacanciesByEnterpriseName(searchtext).subscribe((d) => {this.vacancies = d ; });
       console.log(this.vacancies);
      // //  this.enterprises =  this.vacancies.map(i => this.enterpriseService.getEnterpriseById(searchtext));
      //  this.enterprise =   this.enterpriseService.getEnterpriseById(this.vacancies.);
      //  console.log(this.enterprise);
       this.vacancies.forEach(() => this.enterprises.push(this.enterprise));
       console.log(this.enterprises);
    } else {
    this.vacancyServiec.getNotDeleted().subscribe((d) => {this.vacancies = d ; });
    console.log(this.vacancies);
    const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    console.log(this.vacancies);
  }
  }

  OnSearchSubmit(searchForm: NgForm) {
    console.log(searchForm.value.s);
    this.vacancyServiec.getVacanciesByEnterpriseIdGeneral(searchForm.value.s).subscribe((d) => {this.vacancies = d ; });
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    console.log(this.enterprises);

  }
}
