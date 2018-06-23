import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { User } from '../users.model';
import { UserService } from '../../shared/services/user.service';
import { WorkExperience } from '../../shared/classes/userWorkExperienceModel';
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
  // for adding work exp
  modalRef: BsModalRef;

  constructor(
    private userService: UserService,
    private workService: WorkExperienceService,
    private educationService: EducationalBackgroundService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    // this.route.parent.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   this.user = this.userService.getUserById(this.id);
    // });
    // this.userWorkExperiences = this.workService.getUserExperiences(this.id);
    // this.workService.getUserExperiences(this.id)
    // .subscribe(data => {
    //   this.userWorkExperiences = data;
    // });
    this.id = this.userService.currentUserId;
    this.user = this.userService.getUserById(this.id);
    this.userWorkExperiences = this.workService.getUserExperiences(this.id);
    this.userEducationalBackground = this.educationService.getUserEducationalBackground(this.id);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
