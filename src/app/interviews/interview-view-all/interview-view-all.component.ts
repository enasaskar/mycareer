import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../../shared/services/applicants.service';
import { Applicant } from '../../shared/classes/applicant.model';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { Enterprise } from '../../shared/classes/enterprise';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-view-all',
  templateUrl: './interview-view-all.component.html',
  styleUrls: ['./interview-view-all.component.css']
})
export class InterviewViewAllComponent implements OnInit {
  applicants: Applicant[];
  enterprise: Enterprise;
  enterprise_id: number;
  searchWord: string;
  constructor(private applicantsService: ApplicantsService, private enterpriseService: EnterpriseService, private route: ActivatedRoute){ 
    
  }
  ngOnInit() {
    this.enterprise_id = this.route.snapshot.params['id'];
    this.applicants = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a => a.status == null);
    this.enterprise = this.enterpriseService.getEnterpriseById(this.enterprise_id);
    this.applicantsService.onDelete.subscribe((applicant: Applicant) => {
      this.applicantsService.delete(applicant);
      this.applicants = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a => a.status == null);
    })
    this.applicantsService.onUpdate.subscribe((applicant: Applicant) => {
      this.applicantsService.update(applicant);
      this.applicants = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a => a.status == null);
    })
  }

  OnSearchSubmit() {
    this.applicants = this.applicantsService.getBySearchWord(this.searchWord, this.enterprise_id).filter(a => a.status === null);
  }
}
