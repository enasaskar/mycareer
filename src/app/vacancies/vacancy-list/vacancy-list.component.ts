import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { Enterprise } from '../../shared/classes/enterprise';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

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
  uId: any;
  currentUser = null;
  constructor(private vacancyServiec: VacancyService,
    private enterpriseService: EnterpriseService, private userService: UserService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const searchtext = this.activateRoute.snapshot.params['search'];
    this.searchtext = searchtext;

    if (searchtext) {
      this.enterprise = this.enterpriseService.getByName(searchtext);
      this.vacancyServiec.getVacanciesByEnterpriseId(this.enterprise.id).subscribe((d) => { this.vacancies = d; });
      this.vacancies.forEach(() => this.enterprises.push(this.enterprise));
    } else {
      this.vacancyServiec.getNotDeleted().subscribe((d) => { this.vacancies = d; });
      const ids = this.vacancies.map(i => i.fK_Enterprise_Id);
      this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    }
  }

  OnSearchSubmit(searchForm: NgForm) {
    this.vacancyServiec.getVacanciesByEnterpriseIdGeneral(searchForm.value.s).subscribe((d) => { this.vacancies = d; });
    this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
    console.log(this.enterprises);

  }
}
