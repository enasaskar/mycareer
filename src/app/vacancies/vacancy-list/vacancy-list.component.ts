import { Component, OnInit } from '@angular/core';
import { IVacancy } from '../../shared/interfaces/IVacancy';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: IVacancy[];
  constructor(private vacancyServiec: VacancyService) { }

  ngOnInit() {
    this.vacancies = this.vacancyServiec.getAll();
  }


}
