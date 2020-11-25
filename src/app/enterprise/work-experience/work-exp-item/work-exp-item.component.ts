import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EnterpriseService } from '../../../shared/services/enterprise.service';
import { Enterprise } from '../../../shared/classes/enterprise';
import { WorkExperienceService } from '../../../shared/services/workExperience.service';
import { EducationalBackgroundService } from '../../../shared/services/educationalBackground.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'app-work-exp-item',
  templateUrl: './work-exp-item.component.html',
  styleUrls: ['./work-exp-item.component.css']
})
export class WorkExpItemComponent implements OnInit {

  @Input() workExpItem;
  // @Input() enterprise: Enterprise;
  @Input() workExpIndex: number;
  @Input() type: string;
  enterprise: Enterprise;
  id: number;
  modalRef: BsModalRef;
  isUser = false;

  constructor(private enterpriseService: EnterpriseService,
    private userService: UserService,
    private workExpService: WorkExperienceService,
    private eduService: EducationalBackgroundService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id === this.userService.currentUserId) {
        this.isUser = true;
      }
    });
    this.enterprise = this.enterpriseService.getEnterpriseById(this.workExpItem.enterpriseID);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  deleteExperience() {
    if (this.type === 'edu') {
      this.eduService.deleteEducation(this.id, this.workExpIndex);

    } else {
      this.workExpService.deleteExperience(this.id, this.workExpIndex);
    }
  }
}
