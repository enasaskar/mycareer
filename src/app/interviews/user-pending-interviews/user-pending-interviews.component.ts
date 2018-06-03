import { Component, OnInit, Input } from '@angular/core';
import { Interview } from '../../shared/classes/interview.model';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-user-pending-interviews',
  templateUrl: './user-pending-interviews.component.html',
  styleUrls: ['./user-pending-interviews.component.css']
})
export class UserPendingInterviewsComponent implements OnInit {

  @Input() interviews: Interview[];
  private enterprises = [];
  private vacancies = [];
  constructor(private enterpriseService: EnterpriseService, private vacancyService: VacancyService) { }

  ngOnInit() {
    this.interviews.map(interview => {
      const vacancy = this.vacancyService.getById(interview.vacancyId);
      this.vacancies.push(vacancy);
    });
    this.vacancies.map(vacancy => {
      const enterprise = this.enterpriseService.getEnterpriseById(vacancy.fK_Enterprise_Id);
      this.enterprises.push(enterprise);
    });
  }
}
