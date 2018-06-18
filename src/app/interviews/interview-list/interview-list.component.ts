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
  searchWord:string;

  constructor(private applicantsService:ApplicantsService) {
    
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

  rejectApplicant(item:Applicant){
    const index = this.list.indexOf(item);
    this.list.splice(index,1);
    //this.applicantsService.onDelete.next(item);
  }

  
  // acceptApplicant() {

  // }

  OnSearchSubmit(){
    if(this.listType ==="shortlist"){
      this.list = this.applicantsService.getBySearchWord(this.searchWord,true);
    }else if(this.listType ==="pendingcv"){
      this.list = this.applicantsService.getBySearchWord(this.searchWord,null);
    }   
  }
}
