import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-vacancy-item-details',
  templateUrl: './vacancy-item-details.component.html',
  styleUrls: ['./vacancy-item-details.component.css']
})
export class VacancyItemDetailsComponent implements OnInit {

  vacancies: Vacancy[];
  constructor(private  vacancyServiec: VacancyService) { }

  ngOnInit() {
    this.vacancies = this.vacancyServiec.getAll();

  }

}
