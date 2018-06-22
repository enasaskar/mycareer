import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { EventEmitter } from 'events';
import { User } from '../users.model';
import { WorkExperienceService } from '../../shared/services/workExperience.service';
import { EnterpriseService } from '../../shared/services/enterprise.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  // when getting user by id
  id: number;
  constructor(private userService: UserService,
    private workExpService: WorkExperienceService,
    private enterpriseService: EnterpriseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.user = this.userService.getUserById(this.id);
      // const currentEmpoyment = this.workExpService.getUserExperiences(this.id).filter(exp => exp.endDate === 'present');
      let currentEmpoyment;
      this.workExpService.getUserExperiences(this.id)
      .subscribe(data => {
        currentEmpoyment = data.filter(exp => exp.endDate === 'present');
      });
      this.user.title = currentEmpoyment[0].content;
      this.user.enterpriseName = this.enterpriseService.getEnterpriseById(currentEmpoyment[0].enterpriseID).name;
    });
  }
}
