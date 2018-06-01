import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../users.model';
import { UserService } from '../../shared/services/user.service';
import { WorkExperience } from '../../shared/classes/userWorkExperienceModel';
import { Enterprise } from '../../shared/classes/enterprise';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  // when getting user by id
  id: number;
  userWorkExperiences: WorkExperience[];
  userEducationalBackground: WorkExperience[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.user = this.userService.getUserById(this.id);
    });
    // get this from api b3d kda
    this.userWorkExperiences = [
      new WorkExperience( new Enterprise('Vodafone', '../../../assets/img/logos/vodaphone.png'),
      'Web Developer',
      '10-5-2015',
      'present'),
      new WorkExperience(new Enterprise('Orange', '../../../assets/img/logos/orange.png'),
      'Systems Developer',
      '10-5-2010',
      '20-6-2014'),
      new WorkExperience(new Enterprise('ITWorx', '../../../assets/img/logos/itworx.jpg'),
      'Software Developer',
      '10-5-2009',
      '20-6-2010')
    ];
    // get this from api b3d kda
    this.userEducationalBackground = [
      new WorkExperience(
        new Enterprise('Information Technology Institute', '../../../assets/img/school.png'),
        '9 Months Program',
        '10/2017',
        'present'),
      new WorkExperience(
        new Enterprise('Engineering Ain Shams University', '../../../assets/img/school.png'),
        `Bachelor's Degree`,
        '09/2012',
        '07/2017'),
      new WorkExperience(
        new Enterprise('Al-Farouk Language School', '../../../assets/img/school.png'),
        `HighSchool`,
        '',
        '09/2013'),
    ];
  }
}
