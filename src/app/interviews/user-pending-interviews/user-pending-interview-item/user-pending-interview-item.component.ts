import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { InterviewService } from '../../../shared/services/interview.service';
import { Enterprise } from '../../../shared/classes/enterprise';
import { Vacancy } from '../../../shared/classes/vacancy.model';
import { Interview } from '../../../shared/classes/interview.model';
import { VacancyService } from '../../../shared/services/vacancy-service';
import { EnterpriseService } from '../../../shared/services/enterprise.service';

@Component({
  selector: 'app-user-pending-interview-item',
  templateUrl: './user-pending-interview-item.component.html',
  styleUrls: ['./user-pending-interview-item.component.css']
})
export class UserPendingInterviewItemComponent implements OnInit {

  @Input() i: number;
  // @Input() vacancies: Vacancy[];
  vacancy: Vacancy;
  // @Input() enterprises: Enterprise[];
  enterprise: Enterprise;
  @Input() interview: Interview;
  id: number;
  constructor(private interviewService: InterviewService,
    private vacancyService: VacancyService,
    private enterpriseService: EnterpriseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Get current user id
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.vacancy = this.vacancyService.getById(this.interview.vacancyId);
    console.log(this.vacancy);

    this.enterprise = this.enterpriseService.getEnterpriseById(this.vacancy.fK_Enterprise_Id);
    console.log(this.enterprise);
  }
  cancelInterview() {
    console.log(this.i);
    this.interviewService.deleteUserInterview(this.id, this.i);
  }

}
