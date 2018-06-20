import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Enterprise } from '../../shared/classes/enterprise';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VacancyTypeService } from '../../shared/services/vacancyType-service';
import { VacancyLevelService } from '../../shared/services/vacancyLevel-service';
import { VacancyType } from '../../shared/classes/VacancyType';
import { EnterpriseDetails } from '../../shared/classes/enterprise-details';
import { VacancyLevel } from '../../shared/classes/vacancyLevel';

@Component({
  selector: 'app-vacancy-item-details',
  templateUrl: './vacancy-item-details.component.html',
  styleUrls: ['./vacancy-item-details.component.css']
})
export class VacancyItemDetailsComponent implements OnInit {

  vacancieyDetailslevel: VacancyLevel;
  vacancieyDetailsType: VacancyType;
  vacancieyDetailsEnterprise: EnterpriseDetails;
  vacancies: Vacancy[];
  enterprises: Enterprise[];
  searchWord: any;
  vacancieyDetails: Vacancy;
  constructor(private vacancyServiec: VacancyService, private enterpriseService: EnterpriseService,
     private typeService: VacancyTypeService, private levelsService: VacancyLevelService,
     private activeRoute: ActivatedRoute) {

   }
  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    console.log(id);
    this.vacancieyDetails = this.vacancyServiec.getById(id);
    console.log(this.vacancieyDetails);
    this.vacancieyDetailsEnterprise = this.enterpriseService.getById(this.vacancieyDetails.fK_Enterprise_Id);
    this.vacancieyDetailsType = this.typeService.getById(this.vacancieyDetails.fK_VacancyType_Id);
    this.vacancieyDetailslevel = this.levelsService.getById(this.vacancieyDetails.fK_Level_Id);

     // similar vacancies
    this.vacancyServiec.getNotDeleted().subscribe((d) => {this.vacancies = d ; });
    const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    console.log(this.vacancies);
  }
  OnSearchSubmit(searchForm: NgForm) {}

}
