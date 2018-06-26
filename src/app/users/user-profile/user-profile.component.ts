import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { User } from '../users.model';
import { UserService } from '../../shared/services/user.service';
import { WorkExperience } from '../../shared/classes/userWorkExperienceModel';
import { WorkExperienceService } from '../../shared/services/workExperience.service';
import { EducationalBackgroundService } from '../../shared/services/educationalBackground.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  onEducationChange = new Subject<WorkExperience[]>();
  user: User;
  // when getting user by id
  id: number;
  userWorkExperiences: WorkExperience[];
  userEducationalBackground: WorkExperience[];
  // for adding work exp
  modalRef: BsModalRef;
  isUser = false;

  constructor(
    private userService: UserService,
    private workService: WorkExperienceService,
    private educationService: EducationalBackgroundService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id === this.userService.currentUserId) {
        this.isUser = true;
      }
      this.user = this.userService.getUserById(this.id);
      this.user = this.userService.getUserById(this.id);
      if (this.user.imagePath === null || this.user.imagePath === '') {
        this.user.imagePath = '../../../assets/img/team/anon.png';
      }
      this.userWorkExperiences = this.workService.getUserExperiences(this.id);

      this.workService.onExperienceChange.subscribe(
        (workExp) => {this.userWorkExperiences = workExp; }
      );
      this.userWorkExperiences = this.workService.getUserExperiences(this.id);
      this.educationService.onEducationChange.subscribe(
        (WorkExperiences) => {this.userEducationalBackground = WorkExperiences; }
      );
      this.userEducationalBackground = this.educationService.getUserEducationalBackground(this.id);
    });
    // this.userWorkExperiences = this.workService.getUserExperiences(this.id);
    // this.workService.getUserExperiences(this.id)
    // .subscribe(data => {
    //   this.userWorkExperiences = data;
    // });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
