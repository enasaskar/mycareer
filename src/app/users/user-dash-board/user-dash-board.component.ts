import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { Enterprise } from '../../shared/classes/enterprise';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  userPendingVacancies: Vacancy[];

  constructor() { }

  ngOnInit() {

    // fill this from api
    this.userPendingVacancies = [
      new Vacancy( new Enterprise('Vodafone', '../../../assets/img/logos/vodaphone.png'),
      'Front-end Developer', 'Junior'),
      new Vacancy( new Enterprise('ITWorx', '../../../assets/img/logos/itworx.jpg'),
      'Software Developer', 'Junior'),
      new Vacancy( new Enterprise('Orange', '../../../assets/img/logos/orange.png'),
      'Front-end Developer', 'Junior'),
  ];
  }

}
