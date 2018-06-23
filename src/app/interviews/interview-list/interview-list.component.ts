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
    if(this.listType === "shortlist"){
      this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == true);
    }else if(this.listType ==="pendingcv"){
      this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == null);
    }   
    this.applicantsService.onDelete.subscribe((applicant:Applicant)=>{
      if(this.listType === "shortlist"){
        this.applicantsService.delete(applicant);
        this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == true);
      }else if(this.listType ==="pendingcv"){
        this.applicantsService.delete(applicant);
        this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == null);
      };
      }
     );

     this.applicantsService.onUpdate.subscribe((applicant:Applicant)=>{
       this.applicantsService.update(applicant);
       if(this.listType ==="shortlist"){
          this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == true);
       }else if(this.listType ==="pendingcv"){
        this.list = this.applicantsService.getByEnterpriseId(this.enterprise_id).filter(a=>a.status == null);
       }
       });
  }

  seeMoreclicked() {
    this.seeMore = !this.seeMore;
  }

  rejectApplicant(item: Applicant) {
    this.applicantsService.onDelete.next(item);
  }

  acceptApplicant(item: Applicant) {
    this.applicantsService.onUpdate.next(item);
  }

  OnSearchSubmit(){
    if(this.listType ==="shortlist"){
      this.list = this.applicantsService.getBySearchWord(this.searchWord,this.enterprise_id).filter(a=>a.status == true);;
    }else if(this.listType ==="pendingcv"){
      this.list = this.applicantsService.getBySearchWord(this.searchWord,this.enterprise_id).filter(a=>a.status == null);;
    }   
  }
}
