import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Applicants', 'Accepted', 'Pending','Rejected'];
  public doughnutChartData:number[] = [200, 50, 100,50];
  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
    
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}


