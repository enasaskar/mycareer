import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../../shared/classes/vacancy.model';

@Component({
  selector: 'app-enterprise-vacancy-item',
  templateUrl: './enterprise-vacancy-item.component.html',
  styleUrls: ['./enterprise-vacancy-item.component.css']
})
export class EnterpriseVacancyItemComponent implements OnInit {
  @Input() vacancyitem:Vacancy;

  constructor() { }

  ngOnInit() {
  }

}
