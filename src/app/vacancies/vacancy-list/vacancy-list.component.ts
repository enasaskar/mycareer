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

  vacancies: Vacancy[];
  enterprises = new Array<Enterprise>();
  searchtext: string;

  constructor(private vacancyServiec: VacancyService,
              private enterpriseService: EnterpriseService,
              private userService: UserService,
              private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.searchtext = this.activateRoute.snapshot.params['search'];
    this.GetDataForVancancyAndEnterPrise();
  }

  GetDataForVancancyAndEnterPrise() {
    this.vacancyServiec.getAll().subscribe(
      (data: Vacancy[]) => {
        if (this.searchtext) {
          this.vacancies = data.filter(a => (a.title.toLowerCase().startsWith(this.searchtext.toLowerCase()))
          || (a.description.toLowerCase().startsWith(this.searchtext.toLowerCase()))
          || (this.enterpriseService.getEnterpriseById(a.fK_Enterprise_Id).name.toLowerCase().startsWith(this.searchtext.toLowerCase()))
        );
        this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
      } else {
        this.vacancies = data;
        this.enterprises = this.vacancies.map(i => this.enterpriseService.getEnterpriseById(i.fK_Enterprise_Id));
      }
    }
  );
  }

  OnSearchSubmit(searchForm: NgForm) {
    this.searchtext = searchForm.value.s;
    console.log(this.searchtext);
    this.GetDataForVancancyAndEnterPrise();
  }
}
