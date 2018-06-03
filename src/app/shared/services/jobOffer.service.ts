import { Injectable } from '@angular/core';
import { JobOffer } from '../classes/jobOffer.model';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private JobOffers: JobOffer[] = [
    new JobOffer( 1 , '30-8-2018'),
    new JobOffer (2 , '30-8-2018')
  ];
  constructor() { }
  public getUserJobOffers(id: number): JobOffer[] {
    return this.JobOffers;
  }
}
