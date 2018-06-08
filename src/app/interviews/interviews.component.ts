import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../shared/services/applicants.service';


@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  secondSlotAccepted;
  secondSlotPending;
  firstSlotPending;
  firstSlotAccepted;
  pendingList;
  acceptedList;
  seeMoreAccepted = false;
  seeMorePending = false;
  
  constructor(private appllicantsService: ApplicantsService) { }
 
  seeMoreAcceptedclicked(){
    this.seeMoreAccepted = !this.seeMoreAccepted;
  }
  seeMorePendingclicked(){
    this.seeMorePending = !this.seeMorePending;
  }

  ngOnInit() {
    this.pendingList = this.appllicantsService.getAll().filter(a => a.status === null);
    this.acceptedList =this.appllicantsService.getAll().filter(a => a.status === true);
    
    this.firstSlotPending = this.pendingList.slice(0,3);
    this.secondSlotPending = this.pendingList.slice(3,this.pendingList.length);
    
    this.firstSlotAccepted = this.acceptedList.slice(0,3);
    this.secondSlotAccepted = this.acceptedList.slice(3,this.acceptedList.length); 
  }
  rejectApplicant(id:number){
    //console.log("rejected");
    this.pendingList.splice(id,1);
    //this.applicantsService.delete(id);
    //console.log("isDeleted");
  }
  acceptedApplicant(id:number){
    this.pendingList.update(id,true);
  }
}
