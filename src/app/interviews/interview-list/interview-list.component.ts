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
    
  }
  ngOnInit() {
    if(this.listType === "shortlist"){
      this.list = this.applicantsService.getAll().filter(a => a.status === true);
    }else if(this.listType ==="pendingcv"){
      this.list = this.applicantsService.getAll().filter(a => a.status === null);
    }
  }

  seeMoreclicked() {
    this.seeMore = !this.seeMore;
  }

  rejectApplicant(item:Applicant){
    console.log("rejected");
    const index = this.list.indexOf(item);
    this.list.splice(index,1);
    //this.applicantsService.onDelete.next(item);
  }

  
  // acceptApplicant() {

  // }
}
