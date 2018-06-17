import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../../shared/classes/applicant.model';
import { ApplicantsService } from '../../shared/services/applicants.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
  @Input() listType;
  list:Applicant[];
  seeMore = false;


  constructor(private applicantsService:ApplicantsService) {
    //appllicantsService.onDelete.subscribe((applicant) => { appllicantsService.delete(applicant) });
  }
  ngOnInit() {
    if(this.listType === "shortlist"){
      this.list = this.applicantsService.getAllAccepted();
    }else if(this.listType ==="pendingcv"){
      this.list = this.applicantsService.getAllPending();
    }
    
    
  }

  seeMoreclicked() {
    this.seeMore = !this.seeMore;
  }

  // rejectApplicant() {

  // }
  // acceptApplicant() {

  // }
}
