import { Component, OnInit, Input } from '@angular/core';
import { ApplicantsService } from '../../shared/services/applicants.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
 @Input() listType;

 secondSlotAccepted;
 secondSlotPending;
 firstSlotPending;
 firstSlotAccepted;
 pendingList;
 acceptedList;
 seeMore = false;
 
 
  constructor(private appllicantsService: ApplicantsService) { }
  ngOnInit() {
    //if (this.listType == "shortlist") {
      this.acceptedList = this.appllicantsService.getAll().filter(a => a.status === true);
      this.firstSlotAccepted = this.acceptedList.slice(0, 3);
      this.secondSlotAccepted = this.acceptedList.slice(3, this.acceptedList.length);
    //}
    //else if (this.listType == "pendingcv") {
      this.pendingList = this.appllicantsService.getAll().filter(a => a.status === null);
      this.firstSlotPending = this.pendingList.slice(0, 3);
      this.secondSlotPending = this.pendingList.slice(3, this.pendingList.length);
    //}
  }
  seeMoreclicked(){
    this.seeMore = !this.seeMore;
  }

  rejectApplicant(id:number,slot:string){
    //console.log("rejected");
    if(slot =="first"){
      console.log(this.firstSlotPending[id]);
      this.firstSlotPending.splice(id,1);
    }else if(slot =="second"){
      console.log(this.firstSlotPending[id]);
      this.secondSlotPending.splice(id,1);
    }
    
    //this.applicantsService.delete(id);
    //console.log("isDeleted");
  }
  acceptApplicant(id:number,slot:string){
    if (slot == "first") {
      this.secondSlotAccepted.push(this.firstSlotPending[id]);
      //this.firstSlotPending.update(id,true);
    } else if (slot == "second") {
      this.secondSlotAccepted.push(this.secondSlotPending[id]);
      //this.firstSlotPending.update(id,true);
    }
    
  }
}
