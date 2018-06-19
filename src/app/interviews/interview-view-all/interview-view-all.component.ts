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
<<<<<<< HEAD
  enterprise: Enterprise;
  enterprise_id: number;
  searchWord: string;
  constructor(private applicantsService: ApplicantsService, private enterpriseService: EnterpriseService, private route: ActivatedRoute) { }

=======

  searchWord: string;
  constructor(private applicantsService:ApplicantsService) { }

>>>>>>> 59ed5135464dc70dedc643d435189691354cbe29
  ngOnInit() {
    this.enterprise_id = this.route.snapshot.params['id'];
    this.applicants = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a => a.status === null);
    this.enterprise = this.enterpriseService.getEnterpriseById(this.enterprise_id);
  }

  rejectApplicant(item: Applicant) {
    //console.log("rejected");
    const id = this.applicants.indexOf(item);
    this.applicants.splice(id, 1);
    //this.applicantsService.delete(id);
    //console.log("isDeleted");
  }
  acceptedApplicant(item: Applicant) {
    //this.applicantsService.update(id,true);
  }

  OnSearchSubmit() {
<<<<<<< HEAD
    this.applicants = this.applicantsService.getBySearchWord(this.searchWord, this.enterprise_id).filter(a => a.status === null);
  }
=======
    this.applicants = this.applicantsService.getBySearchWord(this.searchWord, null); 
}
>>>>>>> 59ed5135464dc70dedc643d435189691354cbe29
}
