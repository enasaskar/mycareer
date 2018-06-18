import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../shared/services/applicants.service';
import { Applicant } from '../shared/classes/applicant.model';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  
  constructor(private applicantsService:ApplicantsService) { 
    applicantsService.onDelete.subscribe((applicant:Applicant) => { applicantsService.delete(applicant) });
  }

  ngOnInit() {
    
  }
  
}
