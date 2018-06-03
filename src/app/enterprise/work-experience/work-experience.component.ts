import { Component, OnInit, Input } from '@angular/core';
import { Enterprise } from '../../shared/classes/enterprise';
import { EnterpriseService } from '../../shared/services/enterprise.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  @Input() workExperiences;
  enterprises: Enterprise[] = [];
  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.workExperiences.map(item => {
      const enterprise = this.enterpriseService.getEnterpriseById(item.enterpriseID);
      this.enterprises.push(enterprise);
    });
  }

}
