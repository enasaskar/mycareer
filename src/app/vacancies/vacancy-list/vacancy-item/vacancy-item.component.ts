import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../../shared/classes/vacancy.model';

@Component({
  selector: 'app-vacancy-item',
  templateUrl: './vacancy-item.component.html',
  styleUrls: ['./vacancy-item.component.css']
})
export class VacancyItemComponent implements OnInit {
 @Input() vacancyitem: Vacancy;
  constructor() { }

  ngOnInit() {
  }

}
