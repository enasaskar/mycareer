import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Interview } from '../../shared/classes/interview.model';
import { InterviewService } from '../../shared/services/interview.service';

@Component({
  selector: 'app-user-pending-interviews',
  templateUrl: './user-pending-interviews.component.html',
  styleUrls: ['./user-pending-interviews.component.css']
})
export class UserPendingInterviewsComponent implements OnInit {

  // @Input() interviews: Interview[];
  interviews: Interview[];
  private enterprises = [];
  private vacancies = [];
  id: number;
  constructor(
    private interviewService: InterviewService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Get current user id
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.interviews = this.interviewService.getUserPendingInterviews(this.id);
    // this.interviews.map(interview => {
    //   const vacancy = this.vacancyService.getById(interview.vacancyId);
    //   this.vacancies.push(vacancy);
    // });
    // this.vacancies.map(vacancy => {
    //   const enterprise = this.enterpriseService.getEnterpriseById(vacancy.fK_Enterprise_Id);
    //   this.enterprises.push(enterprise);
    // });
  }
}
