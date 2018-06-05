import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Vacancy } from '../../shared/classes/vacancy.model';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[];
  constructor(private vacancyServiec: VacancyService) { }

  ngOnInit() {
    this.vacancies = this.vacancyServiec.getAll();
  }


}
