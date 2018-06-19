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

   }
  ngOnInit() {
    
    // similar vacancies
    this.vacancyServiec.getNotDeleted().subscribe((d) => {this.vacancies = d ; });
    console.log(this.vacancies);
    const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    console.log(this.vacancies);
  }
  OnSearchSubmit(searchForm: NgForm) {}

}
