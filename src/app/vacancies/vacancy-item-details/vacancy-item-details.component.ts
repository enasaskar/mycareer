import { Component, OnInit, ViewChild } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Enterprise } from '../../shared/classes/enterprise';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyTypeService } from '../../shared/services/vacancyType-service';
import { VacancyLevelService } from '../../shared/services/vacancyLevel-service';
import { VacancyType } from '../../shared/classes/VacancyType';
import { EnterpriseDetails } from '../../shared/classes/enterprise-details';
import { VacancyLevel } from '../../shared/classes/vacancyLevel';
import { UserService } from '../../shared/services/user.service';
import { ApplicantsService } from '../../shared/services/applicants.service';
import { Applicant } from '../../shared/classes/applicant.model';

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
  //enterprises : EnterpriseDetails[];
  oneEnterprise : EnterpriseDetails;
  searchWord: any;
  vacancieyDetails: Vacancy;
  idUser: number;
  uId: any;
  vid: any;

  currentuser = null;
  applystatues: boolean;
  constructor(private vacancyServiec: VacancyService, private enterpriseService: EnterpriseService,
     private typeService: VacancyTypeService, private levelsService: VacancyLevelService,
     private userService: UserService, private applicantService: ApplicantsService,
     private activeRoute: ActivatedRoute, private router: Router) {

  }
  @ViewChild('rownotif') rownotif;

  ngOnInit() {
    debugger
     this.activeRoute.params.subscribe((params) => { this.vid = params['id'] ; } );
     console.log(this.vid);
    this.vacancieyDetails = this.vacancyServiec.getById(this.vid);
    //this.vacancieyDetailsEnterprise = this.enterpriseService.getById(this.vacancieyDetails.fK_Enterprise_Id);
    this.enterpriseService.getById(this.vacancieyDetails.fK_Enterprise_Id).subscribe((data : EnterpriseDetails)=>{
      this.vacancieyDetailsEnterprise = data;
    })
    this.vacancieyDetailsType = this.typeService.getById(this.vacancieyDetails.fK_VacancyType_Id);
    this.vacancieyDetailslevel = this.levelsService.getById(this.vacancieyDetails.fK_Level_Id);
    // row notify
    this.applystatues = false;
    // get current user
    this.uId = this.userService.currentUserId;
    console.log(this.uId);
    if (this.uId !== null && this.uId !== undefined) {
      this.currentuser = this.userService.getUserById(this.uId);
    }

    // details for specific vacancy
     this.activeRoute.params.subscribe((params) => {
       this.vid = params['id'] ;
       // load vacancy details more
       this.load();
      } );

      // similar vacancies
    this.vacancyServiec.getNotDeleted().subscribe((d) => { this.vacancies = d; });
    this.vacancyServiec.getSimilarVacancy(this.vacancieyDetails.title).subscribe((d) => { this.vacancies = d; });
    // const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    // console.log(ids);
    // const ids2 = ids.filter( this.onlyUnique );
    // console.log(ids2);
  this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    // this.vacancies.map(i => this.enterpriseService.getById(i.fK_Enterprise_Id).subscribe((data:EnterpriseDetails)=>{
    //   this.oneEnterprise = data;
    //   this.enterprises.push(this.oneEnterprise);
    // }));
    
    // const ids3 = this.enterprises.filter( this.onlyUnique );
    // console.log(ids3);
    console.log(this.vacancies);
    console.log(this.enterprises);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));

  }
  OnSearchSubmit(searchForm: NgForm) { }
load() {
  console.log(this.vid);
    this.vacancieyDetails = this.vacancyServiec.getById(this.vid);
    //this.vacancieyDetailsEnterprise = this.enterpriseService.getById(this.vacancieyDetails.fK_Enterprise_Id);
    this.vacancieyDetailsType = this.typeService.getById(this.vacancieyDetails.fK_VacancyType_Id);
    this.vacancieyDetailslevel = this.levelsService.getById(this.vacancieyDetails.fK_Level_Id);
}
  onApply(v: Vacancy) {
    console.log(this.uId);
    if (this.uId !== null && this.uId !== undefined) {
      this.currentuser = this.userService.getUserById(this.uId);
      this.applicantService.add(new Applicant(this.currentuser, v));
      this.applystatues = true;

    } else {
        this.router.navigate(['/login']);
      }
  }
}
