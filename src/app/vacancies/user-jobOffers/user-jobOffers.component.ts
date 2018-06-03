import { Component, OnInit, Input } from '@angular/core';
import { JobOffer } from '../../shared/classes/jobOffer.model';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-user-jobOffers',
  templateUrl: './user-jobOffers.component.html',
  styleUrls: ['./user-jobOffers.component.css']
})
export class UserJobOffersComponent implements OnInit {

  @Input() JobOffers: JobOffer[];
  private enterprises = [];
  private vacancies = [];
  constructor(private enterpriseSevice: EnterpriseService, private vacancyService: VacancyService) { }

  ngOnInit() {
    this.JobOffers.map( offer => {
      const vacancy = this.vacancyService.getById(offer.vacancyID);
      this.vacancies.push(vacancy);
    });
    this.vacancies.map(vacancy => {
      const enterprise = this.enterpriseSevice.getEnterpriseById(vacancy.fK_Enterprise_Id);
      this.enterprises.push(enterprise);
    });
  }
  jobOfferStatus(i: number, status: boolean) {
    // I want to reject the other offers so should I do it here or ajax or what??
    this.JobOffers[i].accept = status;
  }
}
