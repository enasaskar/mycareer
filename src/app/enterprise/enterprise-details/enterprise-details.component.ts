import { UserService } from './../../shared/services/user.service';
import { EnterpriseBranches } from './../../shared/classes/enterprise-branches';
import { CityService } from './../../shared/services/city.service';
import { City } from './../../shared/classes/city';
import { EnterpriseService } from './../../shared/services/enterprise.service';
import { EnterpriseDetails } from './../../shared/classes/enterprise-details';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';

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

  public id: number;
  public currentId: number;
  public isEnterprise: boolean;
  public curretntUesrId: number;

  public newId = 5;

  details: EnterpriseDetails = new EnterpriseDetails();

  public e: any;
  public edit;

  sizes: Sizes[];
  countries: Country[];
  cities: City[];



  oldEnterprise: EnterpriseDetails;
 


  constructor(private enterpriseService: EnterpriseService, private active: ActivatedRoute,
    private sizeService: SizeService, private dialog: MatDialog,
    private countryService: CountryService, private cityService: CityService, private router: Router,
    private userService: UserService) {
    this.details.branches = [];
  }

  ngOnInit() {
    if (this.userService.currentUserId != null) {
      this.curretntUesrId = this.userService.currentUserId;
      //console.log(this.curretntUesrId);
      this.currentId = this.userService.getUserById(this.userService.currentUserId).enterpriseId;
      this.isEnterprise = this.userService.getIsEnterprise();
    }
    //this.id = +this.active.snapshot.params['id'];
    this.details.branches.push({city:new City(), country : new Country()});
    this.active.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadData();
    });



  }

  loadData() {
    this.enterpriseService.getById(+this.id).subscribe((data) => {
      this.details = data;
      //console.log(this.details);
      this.oldEnterprise = Object.assign({}, this.details);
      //console.log(this.oldEnterprise);
    });



    this.sizes = this.sizeService.getAll();
    this.countries = this.countryService.getAll();
    //console.log(this.id);
    this.cities = this.cityService.getAll();
    this.countryService.onChange.subscribe(
      () => {
        this.details.branches.map(b => b.country.cities = this.cityService.getByCountryName(b.country.name));
        //console.log('oninit');
      }
    );
  }

  onClick() {
    this.e = document.getElementById('e');
    this.edit = document.getElementById('edit');
    this.e.style.display = 'none';
    this.edit.style.display = 'block';
  }

  onCancle() {
    this.details = Object.assign({}, this.oldEnterprise);
    this.e = document.getElementById('e');
    this.edit = document.getElementById('edit');
    this.e.style.display = 'block';
    this.edit.style.display = 'none';
    //this.router.navigate(['/enterprises/enterprise/details/', this.id]);
  }
  onChange() {
    // console.log();
    this.countryService.onChange.next();
  }
  onFileChange(event) {
    //console.log(event);
  }

  onAddBranch() {
    this.details.branches.push({city:new City(), country : new Country()});
  }
 

  OnAddSubmit(form: NgForm) {
    if (form.valid) {
      //this.newEnterprise.id = this.newId;
      // console.log(this.newBranch);
      //this.details.branches.push(this.details.branches);
      this.enterpriseService.add(this.details).subscribe( (ne : EnterpriseDetails) => {
        //console.log(ne);
        let u = this.userService.getUserById(this.curretntUesrId);
        u.role = "enterprise",
        u.enterpriseId = ne.id;
        this.isEnterprise = true;
        this.userService.isEnterprise = true;
        this.router.navigate(['/enterprises/enterprise/details', ne.id]);
      });
    }
  }

  OnEditSubmit(form: NgForm) {
    // To Do:call update function
    // if(form.valid){
    this.enterpriseService.update(this.details.id - 1, this.details);
    this.e = document.getElementById('e');
    this.edit = document.getElementById('edit');
    this.e.style.display = 'block';
    this.edit.style.display = 'none';

    // }


  }


}
