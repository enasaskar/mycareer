import { CityService } from './../../shared/services/city.service';
import { City } from './../../shared/classes/city';
import { EnterpriseService } from './../../shared/services/enterprise.service';
import { EnterpriseDetails } from './../../shared/classes/enterprise-details';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material";

import {  
  NgbModal,  
  ModalDismissReasons  
} from '@ng-bootstrap/ng-bootstrap';  
import { Sizes } from '../../shared/classes/sizes';
import { SizeService } from '../../shared/services/size.service';
import { Country } from '../../shared/classes/country';
import { CountryService } from '../../shared/services/country.service';



@Component({
  selector: 'app-enterprise-details',
  templateUrl: './enterprise-details.component.html',
  styleUrls: ['./enterprise-details.component.css']
})
export class EnterpriseDetailsComponent implements OnInit {

  public id : string; 

  public newId = 3;

  details : EnterpriseDetails;

  public  e:any;
  public  edit;

  sizes : Sizes [];
  countries : Country[];
  cities : City[];
  

  newEnterprise  = new EnterpriseDetails();
  
  
  constructor(private enterpriseService : EnterpriseService,private active : ActivatedRoute,
    private sizeService : SizeService,private dialog: MatDialog,
    private countryService : CountryService, private cityService : CityService) {
  
   }
 
  ngOnInit() {     
    this.id = this.active.snapshot.params["id"]; 
    this.details = this.enterpriseService.getById(+this.id);
    this.sizes = this.sizeService.getAll();   
    this.countries = this.countryService.getAll();
    this.cities = this.cityService.getAll();
  }
  
  onClick(){
    this.e = document.getElementById("e");
    this.edit = document.getElementById("edit");  
    this.e.style.display = "none";
    this.edit.style.display = "block";
  }

  onCancle(){
    this.e = document.getElementById("e");
    this.edit = document.getElementById("edit");  
    this.e.style.display = "block";
    this.edit.style.display = "none";
  }

  OnAddSubmit(form : NgForm){
    if(form.valid)
    {
      this.newEnterprise.id = this.newId;
      //console.log(this.newEnterprise);
      this.enterpriseService.add(this.newEnterprise);
      //console.log(this.enterpriseService.getAllDetails());
      console.log(this.newEnterprise.size);
      
      this.newId++;
  
    }
  }
  
  OnEditSubmit(form : NgForm){
      //To Do:call update function
      this.enterpriseService.update(this.details.id-1,this.details);
      this.e = document.getElementById("e");
      this.edit = document.getElementById("edit");  
      this.e.style.display = "block";
      this.edit.style.display = "none";
      
  }


}
