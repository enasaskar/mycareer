import { Component, OnInit, Input } from '@angular/core';
import { IVacancy } from '../../../shared/interfaces/IVacancy';

@Component({
  selector: 'app-enterprise-vacancy-item',
  templateUrl: './enterprise-vacancy-item.component.html',
  styleUrls: ['./enterprise-vacancy-item.component.css']
})
export class EnterpriseVacancyItemComponent implements OnInit {
  @Input() vacancyitem:IVacancy;

  constructor() { }

  ngOnInit() {
  }

}
