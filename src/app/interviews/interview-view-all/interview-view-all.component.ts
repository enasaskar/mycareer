import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../../shared/services/applicants.service';
import { Applicant } from '../../shared/classes/applicant.model';

@Component({
  selector: 'app-interview-view-all',
  templateUrl: './interview-view-all.component.html',
  styleUrls: ['./interview-view-all.component.css']
})
export class InterviewViewAllComponent implements OnInit {
  applicants:Applicant[];

  searchWord : string;
  constructor(private applicantsService:ApplicantsService) { }
  
  ngOnInit() {
    this.applicants = this.applicantsService.getAllPending();
  }

  rejectApplicant(item:Applicant){
    //console.log("rejected");
    const id = this.applicants.indexOf(item);
    this.applicants.splice(id,1);
    //this.applicantsService.delete(id);
    //console.log("isDeleted");
  }
  acceptedApplicant(item:Applicant){
    //this.applicantsService.update(id,true);
  }

  OnSearchSubmit(){
    this.applicants = this.applicantsService.getBySearchWord(this.searchWord,null);  
}
}
