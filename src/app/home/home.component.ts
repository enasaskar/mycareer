import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home-service.service';
import { IService } from 'src/app/shared/interfaces/IService';
import { IOffer } from 'src/app/shared/interfaces/IOffer';
import { JobOfferService } from 'src/app/shared/services/job-offer.service';
import { ILogo } from '../shared/interfaces/ILogo';
import { CompanyLogoService } from'../shared/services/company-logo.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
  
})

export class HomeComponent implements OnInit {
  servicessitem: IService[];
  jobofferitems:IOffer[]
  companylogoitems:ILogo[];
  images: Array<string> =[
      "../../assets/img/slides/slide-1.jpg",
      "../../assets/img/slides/slide-2.jpg"
  ]
  
  
  constructor(config: NgbCarouselConfig,private homeservice:HomeService,private offerservice:JobOfferService,private Logoservice:CompanyLogoService ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
   }

  ngOnInit() {
    this.servicessitem = this.homeservice.getAll();
    this.jobofferitems = this.offerservice.getAll();
    this.companylogoitems = this.Logoservice.getAll();
  }

}
