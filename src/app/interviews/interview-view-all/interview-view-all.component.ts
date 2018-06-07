import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../../shared/services/applicants.service';

@Component({
  selector: 'app-interview-view-all',
  templateUrl: './interview-view-all.component.html',
  styleUrls: ['./interview-view-all.component.css']
})
export class InterviewViewAllComponent implements OnInit {
  applicants;
  constructor(private applicantsService:ApplicantsService) { }
  
  ngOnInit() {
    this.applicants = this.applicantsService.getAll().filter(a => a.status === null);
  }

  rejectApplicant(id:number){
    //console.log("rejected");
    this.applicants.splice(id,1);
    //this.applicantsService.delete(id);
    //console.log("isDeleted");
  }
  acceptedApplicant(id:number){
    this.applicantsService.update(id,true);
  }
}
