import { Component, OnInit, Input } from '@angular/core';
import { IVacancy } from '../../../shared/interfaces/IVacancy';

@Component({
  selector: 'app-vacancy-item',
  templateUrl: './vacancy-item.component.html',
  styleUrls: ['./vacancy-item.component.css']
})
export class VacancyItemComponent implements OnInit {
 @Input() vacancyitem:IVacancy;
  constructor() { }

  ngOnInit() {
  }

}
