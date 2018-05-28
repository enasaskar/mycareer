import { EnterpriseService } from './../../shared/services/enterprise.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnterpriseDetails } from '../../shared/classes/enterprise-details';
import { SizeService } from '../../shared/services/size.service';
import { Sizes } from '../../shared/classes/sizes';

@Component({
  selector: 'app-enterprise-create',
  templateUrl: './enterprise-create.component.html',
  styleUrls: ['./enterprise-create.component.css'],
})
export class EnterpriseCreateComponent implements OnInit {

  newEnterprise  = new EnterpriseDetails();
  id : number = 3;
  sizes : Sizes [];
  

  constructor( private enterpriseService :EnterpriseService , private sizeService : SizeService) { }

  ngOnInit() {
    this.sizes = this.sizeService.getAll();
  }

  OnSubmit(form : NgForm)
  {
    if(form.valid)
    {
      this.newEnterprise.id = this.id;
      //console.log(this.newEnterprise);
      this.enterpriseService.add(this.newEnterprise);
      //console.log(this.enterpriseService.getAllDetails());
      console.log(this.newEnterprise.size);
      
      this.id++;
  
    }
  }
}
