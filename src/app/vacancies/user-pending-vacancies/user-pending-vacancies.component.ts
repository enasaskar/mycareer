import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-pending-vacancies',
  templateUrl: './user-pending-vacancies.component.html',
  styleUrls: ['./user-pending-vacancies.component.css']
})
export class UserPendingVacanciesComponent implements OnInit {

  @Input() userPendingVacancies;
  constructor() { }

  ngOnInit() {
  }

}
