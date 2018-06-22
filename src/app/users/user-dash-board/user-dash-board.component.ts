import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { Enterprise } from '../../shared/classes/enterprise';
import { JobOffer } from '../../shared/classes/jobOffer.model';
import { Interview } from '../../shared/classes/interview.model';
import { VacancyService } from '../../shared/services/vacancy-service';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { JobOfferService } from '../../shared/services/jobOffer.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PathService } from '../../shared/services/path.service';
import { IPath } from '../../shared/interfaces/IPath';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  userPendingVacancies: Vacancy[];
  userPendingInterviews: Interview[];
  userJobOffers: JobOffer[];
  userPaths: IPath[];
  id: number;

  constructor(private vacancyService: VacancyService,
    private jobOfferService: JobOfferService,
    private route: ActivatedRoute,
    private pathService: PathService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.userPendingVacancies = this.vacancyService.getUserVacancies(this.id);
    this.userJobOffers = this.jobOfferService.getUserJobOffers(this.id);
    this.userPaths = this.pathService.getUserPaths(this.id);
  }

}
