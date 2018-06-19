import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { Enterprise } from '../../shared/classes/enterprise';
import { JobOffer } from '../../shared/classes/jobOffer.model';
import { Interview } from '../../shared/classes/interview.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { JobOfferService } from '../../shared/services/jobOffer.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  userPendingVacancies: Vacancy[];
  userPendingInterviews: Interview[];
  userJobOffers: JobOffer[];
  id: number;

  constructor(private vacancyService: VacancyService,
    private enterpriseService: EnterpriseService,
    private jobOfferService: JobOfferService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.userPendingVacancies = this.vacancyService.getUserVacancies(this.id);

    // fill this from api
    // this.userPendingInterviews = [
    //   new Interview(1, '15-5-2018', '12:30 pm'),
    //   new Interview(2, '15-5-2018', '12:30 pm'),
    //   new Interview(3, '15-5-2018', '12:30 pm')
    // ];

    // fill this from api
    this.userJobOffers = this.jobOfferService.getUserJobOffers(this.id);
  }

}
