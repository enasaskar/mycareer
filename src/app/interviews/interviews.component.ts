import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../shared/services/applicants.service';
import { Applicant } from '../shared/classes/applicant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  enterprise_name:string;
  constructor(private applicantsService:ApplicantsService,private route:ActivatedRoute) { 
    applicantsService.onDelete.subscribe((applicant:Applicant) => { applicantsService.delete(applicant) });
  }

  ngOnInit() {
    this.enterprise_name = this.route.snapshot.params['name'];
  }
  
}
