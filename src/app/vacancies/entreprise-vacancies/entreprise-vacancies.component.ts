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
  constructor(private eVacancyServiec: VacancyService) { }

  ngOnInit() {
    this.eVacancies = this.eVacancyServiec.getByEnterpriseId(1); 
  }

}
