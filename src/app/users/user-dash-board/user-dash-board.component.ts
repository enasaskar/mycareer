import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { Enterprise } from '../../shared/classes/enterprise';
import { JobOffer } from '../../shared/classes/jobOffer.model';
import { Interview } from '../../shared/classes/interview.model';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  userPendingVacancies: Vacancy[];
  userPendingInterviews: Interview[];
  userJobOffers: JobOffer[];

  constructor() { }

  ngOnInit() {

    // fill this from api
    this.userPendingVacancies = [
      new Vacancy( new Enterprise('Vodafone', '../../../assets/img/logos/vodaphone.png'),
      'Front-end Developer', 'Junior'),
      new Vacancy( new Enterprise('ITWorx', '../../../assets/img/logos/itworx.jpg'),
      'Software Developer', 'Junior'),
      new Vacancy( new Enterprise('Orange', '../../../assets/img/logos/orange.png'),
      'Front-end Developer', 'Junior')
    ];
    // fill this from api
    this.userPendingInterviews = [
      new Interview(new Vacancy( new Enterprise('Vodafone', '../../../assets/img/logos/vodaphone.png'),
      'Front-end Developer', 'Junior'), '15-5-2018', '12:30 pm'),
      new Interview(new Vacancy( new Enterprise('ITWorx', '../../../assets/img/logos/itworx.jpg'),
      'Software Developer', 'Junior'), '15-5-2018', '12:30 pm'),
      new Interview(new Vacancy( new Enterprise('Orange', '../../../assets/img/logos/orange.png'),
      'Front-end Developer', 'Junior'), '15-5-2018', '12:30 pm')
    ];

    // fill this from api
    this.userJobOffers = [
      new JobOffer( new Vacancy( new Enterprise('Vodafone', '../../../assets/img/logos/vodaphone.png'),
      'Front-end Developer', 'Junior'),
      '30-8-2018'),
      new JobOffer ( new Vacancy( new Enterprise('ITWorx', '../../../assets/img/logos/itworx.jpg'),
      'Software Developer', 'Junior'),
      '30-8-2018')
    ];
  }

}
