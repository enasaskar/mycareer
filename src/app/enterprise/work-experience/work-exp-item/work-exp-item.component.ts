import { Component, OnInit, Input } from '@angular/core';
import { EnterpriseService } from '../../../shared/services/enterprise.service';
import { Enterprise } from '../../../shared/classes/enterprise';
import { WorkExperienceService } from '../../../shared/services/workExperience.service';
import { EducationalBackgroundService } from '../../../shared/services/educationalBackground.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

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

  constructor(private enterpriseService: EnterpriseService,
    private workExpService: WorkExperienceService,
    private eduService: EducationalBackgroundService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.enterprise = this.enterpriseService.getEnterpriseById(this.workExpItem.enterpriseID);
  }

  deleteExperience() {
    if (this.type === 'edu') {
      this.eduService.deleteEducation(this.id, this.workExpIndex);

    } else {
      this.workExpService.deleteExperience(this.id, this.workExpIndex);
    }
  }
}
