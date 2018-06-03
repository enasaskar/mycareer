import { Component, OnInit } from '@angular/core';
import { IVacancy } from '../../shared/interfaces/IVacancy';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-entreprise-vacancies',
  templateUrl: './entreprise-vacancies.component.html',
  styleUrls: ['./entreprise-vacancies.component.css']
})
export class EntrepriseVacanciesComponent implements OnInit {
  vacancies: IVacancy[];  
  constructor(private vacancyServiec: VacancyService) { }

  ngOnInit() {
    this.vacancies = this.vacancyServiec.getAll();    
  }

}
