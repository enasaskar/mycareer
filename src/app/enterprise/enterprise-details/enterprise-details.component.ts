import { EnterpriseBranches } from './../../shared/classes/enterprise-branches';
import { CityService } from './../../shared/services/city.service';
import { City } from './../../shared/classes/city';
import { EnterpriseService } from './../../shared/services/enterprise.service';
import { EnterpriseDetails } from './../../shared/classes/enterprise-details';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {Router} from "@angular/router";

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
  oldEnterprise : EnterpriseDetails;
  newBranch = new EnterpriseBranches();
  
  
  constructor(private enterpriseService : EnterpriseService,private active : ActivatedRoute,
    private sizeService : SizeService,private dialog: MatDialog,
    private countryService : CountryService, private cityService : CityService,private router: Router) {
      this.newEnterprise.branches = [];
   }
 
  ngOnInit() {     
    this.id = this.active.snapshot.params["id"]; 
    this.details = this.enterpriseService.getById(+this.id);
    this.oldEnterprise = Object.assign({}, this.details);
    console.log(this.oldEnterprise);
    this.sizes = this.sizeService.getAll();   
    this.countries = this.countryService.getAll();
    console.log(this.id);
    this.cities = this.cityService.getAll();
    this.countryService.onChange.subscribe(
      () => {this.details.branches.map(co => co.country.cities = this.cityService.getByCountryName(co.country.name));
      console.log("oninit");}
    );
  }
  
  onClick(){
    this.e = document.getElementById("e");
    this.edit = document.getElementById("edit");  
    this.e.style.display = "none";
    this.edit.style.display = "block";
  }

  onCancle(){
    this.details = Object.assign({}, this.oldEnterprise);
    this.e = document.getElementById("e");
    this.edit = document.getElementById("edit");  
    this.e.style.display = "block";
    this.edit.style.display = "none";
   this.router.navigate(['/enterprises/enterprise/details/',this.id])
  }
  onChange(){
    // console.log();
    this.countryService.onChange.next();
  }
  onFileChange(event){
    console.log(event);
  }

  onAddBranch(){
    this.newEnterprise.branches.push(this.newBranch);
    const branches = document.getElementsByClassName("appendBranch")[0];
    branches.innerHTML += `<div class="row branches">
    <div class="form-group col-md-3 input-group-sm">
        <div class="input-group input-group-icon">
            <span class="input-group-addon">
              <span class="icon"><i class="fa fa-location-arrow"></i></span>
            </span>
            <select (change) = ${this.onChange()}  class="form-control" required [name] = ${this.newBranch.country} [(ngModel)] =${this.newBranch.country}> 
                <option *ngFor=let co of ${this.countries}">{{co.name}}</option>
              </select>                            													
          </div>
    </div>

    <div class="form-group col-md-3 input-group-sm">
        <div class="input-group input-group-icon">
            <span class="input-group-addon">
              <span class="icon"><i class="fa fa-location-arrow"></i></span>
            </span>
            <select class="form-control" required [name] = ${this.newBranch.city} [(ngModel)] = ${this.newBranch.city}> 
              <option *ngFor="let ci of ${this.cities}">{{ci.name}}</option>
            </select>                            													
          </div>                    
    </div>
    <div class="form-group col-md-4 input-group-sm">
        <div class="input-group input-group-icon">
            <span class="input-group-addon">
              <span class="icon"><i class="fa fa-location-arrow"></i></span>
            </span>
            <input type="text" required class="form-control" [name]=${this.newBranch.locationDetails} placeholder="Location" [(ngModel)] = ${this.newBranch.locationDetails}>                              													
          </div>
    </div>
  </div>`;
  }

  OnAddSubmit(form : NgForm){
    if(form.valid){
      this.newEnterprise.id = this.newId;
      //console.log(this.newEnterprise);
      this.enterpriseService.add(this.newEnterprise);
      //console.log(this.enterpriseService.getAllDetails());
      //console.log(this.newEnterprise.size);
      
      this.newId++;
      this.router.navigate(['/enterprises/enterprise/details',this.newEnterprise.id]);
  
    }
  }
  
  OnEditSubmit(form : NgForm){
      //To Do:call update function
      // if(form.valid){
        this.enterpriseService.update(this.details.id-1,this.details);
        this.e = document.getElementById("e");
        this.edit = document.getElementById("edit");  
        this.e.style.display = "block";
        this.edit.style.display = "none";

      // }
      
      
  }


}
