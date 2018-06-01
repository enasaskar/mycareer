import { Component, OnInit, Input } from '@angular/core';
import { JobOffer } from '../../shared/classes/jobOffer.model';

@Component({
  selector: 'app-user-jobOffers',
  templateUrl: './user-jobOffers.component.html',
  styleUrls: ['./user-jobOffers.component.css']
})
export class UserJobOffersComponent implements OnInit {

  @Input() JobOffers: JobOffer[];
  constructor() { }

  ngOnInit() {
  }
  jobOfferStatus(i: number, status: boolean) {
    // I want to reject the other offers so should I do it here or ajax or what??
    this.JobOffers[i].accept = status;
  }
}
