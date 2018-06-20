import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../../shared/classes/applicant.model';
import { ApplicantsService } from '../../shared/services/applicants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
  @Input() listType;
  list:Applicant[];
  enterprise_id:number;
  
  seeMore = false;
  searchWord:string;

  constructor(private applicantsService:ApplicantsService,private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.enterprise_id = this.route.snapshot.params['id']; 
    // if(this.listType === "shortlist"){
    //   this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == true);
    // }else if(this.listType ==="pendingcv"){
    //   this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == null);
    // }
     this.list = this.applicantsService.getAll();
    // console.log(this.list)
    this.applicantsService.onInterviewDelete.subscribe((applicant:Applicant)=>{this.applicantsService.delete(applicant)} );
    //console.log(this.list)

  }

  seeMoreclicked() {
    this.seeMore = !this.seeMore;
  }

  rejectApplicant(item: Applicant) {
    const index = this.list.indexOf(item);
    this.list.splice(index, 1);
    //this.applicantsService.onDelete.next(item);
  }

  // acceptApplicant() {

  // }

  OnSearchSubmit(){
    if(this.listType ==="shortlist"){
      this.list = this.applicantsService.getBySearchWord(this.searchWord,this.enterprise_id).filter(a=>a.status == true);;
    }else if(this.listType ==="pendingcv"){
      this.list = this.applicantsService.getBySearchWord(this.searchWord,this.enterprise_id).filter(a=>a.status == null);;
    }   
  }
}
