import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home-service.service';
import { IService } from 'src/app/shared/interfaces/IService';
import { IOffer } from 'src/app/shared/interfaces/IOffer';
import { JobOfferService } from 'src/app/shared/services/job-offer.service';
import { ILogo } from '../shared/interfaces/ILogo';
import { CompanyLogoService } from'../shared/services/company-logo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  servicessitem:IService[];
  jobofferitems:IOffer[]
  companylogoitems:ILogo[];
  
  constructor(private homeservice:HomeService,private offerservice:JobOfferService,private Logoservice:CompanyLogoService ) { }

  ngOnInit() {
    this.servicessitem=this.homeservice.getAll();
    this.jobofferitems=this.offerservice.getAll();
    this.companylogoitems=this.Logoservice.getAll();
  }

}
