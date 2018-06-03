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
    this.userWorkExperiences = this.userService.getUserExperiences(this.id);
    // get this from api b3d kda
    this.userEducationalBackground = this.userService.getUserEducationalBackground(this.id);
  }
}
