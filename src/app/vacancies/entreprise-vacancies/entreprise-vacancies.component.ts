import { EnterpriseService } from './../../shared/services/enterprise.service';
import { Enterprise } from './../../shared/classes/enterprise';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-entreprise-vacancies',
  templateUrl: './entreprise-vacancies.component.html',
  styleUrls: ['./entreprise-vacancies.component.css']
})
export class EntrepriseVacanciesComponent implements OnInit {
  eVacancies: Vacancy[];
  enterprise: Enterprise;
  eId: number;
  currentUser: any;
  constructor(private eVacancyServiec: VacancyService, private userService: UserService ,
     private active: ActivatedRoute, private eService: EnterpriseService) { }

  ngOnInit() {
    this.eId = +this.active.snapshot.params['id'];
      this.eVacancies = this.eVacancyServiec.getByEnterpriseId(this.eId);
      console.log(this.eId);
      console.log(this.eVacancies);
        this.enterprise = this.eService.getEnterpriseById(this.eId);
        console.log(this.enterprise);
}
}
