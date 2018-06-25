import { EnterpriseDetails } from './../../shared/classes/enterprise-details';
import { EnterpriseService } from './../../shared/services/enterprise.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Applicants', 'Accepted', 'Pending','Rejected'];
  public doughnutChartData:number[] = [200, 50, 100,50];
  public doughnutChartType:string = 'doughnut';

  enterprise : EnterpriseDetails;
  eId : number;
  constructor(private enterpriseService : EnterpriseService,private router : ActivatedRoute) { }

  ngOnInit() {
    this.eId = +this.router.snapshot.params["id"];
    console.log(this.eId);
    //this.enterprise = this.enterpriseService.getById(this.eId);
    this.enterpriseService.getById(this.eId).subscribe((data) => {
      this.enterprise = data;
    });
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}


