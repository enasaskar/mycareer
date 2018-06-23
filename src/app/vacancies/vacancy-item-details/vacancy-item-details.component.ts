import { Component, OnInit } from '@angular/core';
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
  constructor(private vacancyServiec: VacancyService, private enterpriseService: EnterpriseService,
     private typeService: VacancyTypeService, private levelsService: VacancyLevelService,
     private userService: UserService, private applicantService: ApplicantsService,
     private activeRoute: ActivatedRoute, private router: Router) {

  }
 onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.vacancieyDetails = this.vacancyServiec.getById(id);
    this.vacancieyDetailsEnterprise = this.enterpriseService.getById(this.vacancieyDetails.fK_Enterprise_Id);
    this.vacancieyDetailsType = this.typeService.getById(this.vacancieyDetails.fK_VacancyType_Id);
    this.vacancieyDetailslevel = this.levelsService.getById(this.vacancieyDetails.fK_Level_Id);

    // similar vacancies
    this.vacancyServiec.getNotDeleted().subscribe((d) => { this.vacancies = d; });
    const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
    const ids2 =ids.filter( this.onlyUnique );
    console.log(ids2);
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    const ids3 = this.enterprises.filter( this.onlyUnique );
    console.log(ids3);

  }
  OnSearchSubmit(searchForm: NgForm) { }

  onApply(v: Vacancy) {
    this.uId = this.userService.currentUserId;
    console.log(this.uId);
    if (this.uId !== null && this.uId !== undefined) {
      const user = this.userService.getUserById(this.uId);
      this.applicantService.add(new Applicant(user, v));
      this.router.navigate(['/interviews/applicants/1']);

    } else {
        this.router.navigate(['/login']);
      }
  }
}
