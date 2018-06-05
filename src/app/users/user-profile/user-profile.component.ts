import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../users.model';
import { UserService } from '../../shared/services/user.service';
import { WorkExperience } from '../../shared/classes/userWorkExperienceModel';
import { Enterprise } from '../../shared/classes/enterprise';
import { WorkExperienceService } from '../../shared/services/workExperience.service';
import { EducationalBackgroundService } from '../../shared/services/educationalBackground.service';

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
    private workService: WorkExperienceService,
    private educationService: EducationalBackgroundService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.user = this.userService.getUserById(this.id);
    });
    // get this from api b3d kda
    this.userWorkExperiences = this.workService.getUserExperiences(this.id);
    // get this from api b3d kda
    this.userEducationalBackground = this.educationService.getUserEducationalBackground(this.id);
  }
}
