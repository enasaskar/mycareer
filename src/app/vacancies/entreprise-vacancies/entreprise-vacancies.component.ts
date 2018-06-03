import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-entreprise-vacancies',
  templateUrl: './entreprise-vacancies.component.html',
  styleUrls: ['./entreprise-vacancies.component.css']
})
export class EntrepriseVacanciesComponent implements OnInit {
  vacancies: Vacancy[];  
  constructor(private vacancyServiec: VacancyService) { }

  ngOnInit() {
    this.vacancies = this.vacancyServiec.getAll();    
  }

}
