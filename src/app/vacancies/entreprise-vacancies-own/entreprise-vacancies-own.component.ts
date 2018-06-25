import { EnterpriseService } from './../../shared/services/enterprise.service';
import { Enterprise } from './../../shared/classes/enterprise';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-entreprise-vacancies-own',
  templateUrl: './entreprise-vacancies-own.component.html',
  styleUrls: ['./entreprise-vacancies-own.component.css']
})
export class EntrepriseVacanciesOwmComponent implements OnInit {
  eVacancies: Vacancy[];
  enterprise: Enterprise;
  uId: any;
  currentUser: any;
  constructor(private eVacancyServiec: VacancyService, private userService: UserService ,
     private active: ActivatedRoute, private eService: EnterpriseService) { }

  ngOnInit() {
    this.uId = this.userService.currentUserId;
    if (this.uId) {
      this.currentUser = this.userService.getUserById(this.uId);
      console.log(this.uId);
      console.log(this.currentUser.role);
    this.eVacancies = this.eVacancyServiec.getByEnterpriseId(this.uId);
        this.enterprise = this.eService.getEnterpriseById(this.uId);
  }
}
}
