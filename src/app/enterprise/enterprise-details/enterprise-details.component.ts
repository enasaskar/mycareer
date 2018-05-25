import { EnterpriseService } from './../../shared/classes/enterprise-service';
import { EnterpriseDetails } from './../../shared/classes/enterprise-details';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-enterprise-details',
  templateUrl: './enterprise-details.component.html',
  styleUrls: ['./enterprise-details.component.css']
})
export class EnterpriseDetailsComponent implements OnInit {

  public id : string; 

  details : EnterpriseDetails;
  constructor(private enterpriseService : EnterpriseService,private active : ActivatedRoute) {
    //console.log(this.id + "id");
    //this.details = enterpriseService.getById(this.id);
   }
   
  ngOnInit() {
    // console.log(this.id + "init");
    // this.details  = this.getdata(this.id);   
    this.id = this.active.snapshot.params["id"]; 
    this.details = this.enterpriseService.getById(+this.id);
  }
  // ngAfterViewChecked() {
  //   console.log(this.id + "view");
  // }

  // getdata(myId:number)
  // {
  //   return this.enterpriseService.getById(myId);
  // }
}
