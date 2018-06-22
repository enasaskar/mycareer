import { EnterpriseService } from './../../shared/services/enterprise.service';
import { Enterprise } from './../../shared/classes/enterprise';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-entreprise-vacancies',
  templateUrl: './entreprise-vacancies.component.html',
  styleUrls: ['./entreprise-vacancies.component.css']
})
export class EntrepriseVacanciesComponent implements OnInit {
  eVacancies: Vacancy[];  
  enterprise : Enterprise;
  constructor(private eVacancyServiec: VacancyService,private active : ActivatedRoute,private eService : EnterpriseService) { }

  ngOnInit() {
    this.eVacancies = this.eVacancyServiec.getByEnterpriseId(+this.active.snapshot.params["id"]); 
    this.enterprise = this.eService.getEnterpriseById(+this.active.snapshot.params["id"]);
  }

}
