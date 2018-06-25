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


  }
  OnSearchSubmit(searchForm: NgForm) { }
load() {
  console.log(this.vid);
    this.vacancyServiec.getById(this.vid).subscribe(
      (data: Vacancy) =>  {
        this.vacancieyDetails = data ;
        console.log( this.vacancieyDetails);
        this.vacancieyDetailsEnterprise = this.enterpriseService.getByIdStatic(this.vacancieyDetails.fK_Enterprise_Id);
        console.log( this.vacancieyDetailsEnterprise);
        this.vacancieyDetailsType = this.typeService.getById(this.vacancieyDetails.fK_VacancyType_Id);
        this.vacancieyDetailslevel = this.levelsService.getById(this.vacancieyDetails.fK_Level_Id);

       // similar vacancies
     this.vacancyServiec.getAll().subscribe((d: Vacancy[]) => {
      this.vacancies = d.filter(a => a.title.toLowerCase().toString().includes(this.vacancieyDetails.title.toLowerCase()));
      this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
     });
      });
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
