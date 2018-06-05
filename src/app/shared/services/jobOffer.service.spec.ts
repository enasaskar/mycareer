/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobOfferService } from './jobOffer.service';

describe('Service: JobOffer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobOfferService]
    });
  });

  it('should ...', inject([JobOfferService], (service: JobOfferService) => {
    expect(service).toBeTruthy();
  }));
});
