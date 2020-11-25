import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { EventEmitter } from 'events';
import { User } from '../users.model';
import { WorkExperienceService } from '../../shared/services/workExperience.service';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { WorkExperience } from '../../shared/classes/userWorkExperienceModel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  id: number;
  expChanged: WorkExperience[];
  isUser = false;
  constructor(private userService: UserService,
    private workExpService: WorkExperienceService,
    private enterpriseService: EnterpriseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id === this.userService.currentUserId) {
        this.isUser = true;
      }
      this.user = this.userService.getUserById(this.id);
      this.workExpService.onExperienceChange.subscribe((WorkExperiences) => {
        console.log('in subscribe');
        const current = this.workExpService.getCurrentUserWorkExp(this.id);
        this.user.title = current[0].content;
        this.user.enterpriseName = this.enterpriseService.getEnterpriseById(current[0].enterpriseID).name;
      });
      const currentEmployment = this.workExpService.getCurrentUserWorkExp(this.id);
      this.user.title = currentEmployment[0].content;
      this.user.enterpriseName = this.enterpriseService.getEnterpriseById(currentEmployment[0].enterpriseID).name;
    });
  }
}
