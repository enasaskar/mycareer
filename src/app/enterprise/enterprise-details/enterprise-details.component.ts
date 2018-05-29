import { EnterpriseService } from './../../shared/services/enterprise.service';
import { EnterpriseDetails } from './../../shared/classes/enterprise-details';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {  
  NgbModal,  
  ModalDismissReasons  
} from '@ng-bootstrap/ng-bootstrap';  
import { Sizes } from '../../shared/classes/sizes';
import { SizeService } from '../../shared/services/size.service';



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

  flag : boolean = true;
  
  newEnterprise  = new EnterpriseDetails();
  
  
  constructor(private enterpriseService : EnterpriseService,private active : ActivatedRoute,
    private sizeService : SizeService, private modalService: NgbModal) {
  
   }
   
  ngOnInit() {     
    this.id = this.active.snapshot.params["id"]; 
    this.details = this.enterpriseService.getById(+this.id);
    if(this.details == undefined){
      this.flag = false;
    }
    console.log(this.flag);
    this.e = document.getElementById("e");
    this.edit = document.getElementById("edit");
    this.sizes = this.sizeService.getAll();
     
  }
  
  onClick(){
    
    this.e.style.display = "none";
    this.edit.style.display = "block";
  }

  onCancle(){
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
      
  }


  showModal(content) {  
    this.modalService.open(content).result.then(  
        (closeResult) => {  
            //modal close  
            console.log("modal closed : ", closeResult);  
        }, (dismissReason) => {  
            //modal Dismiss  
            if (dismissReason == ModalDismissReasons.ESC) {  
                console.log("modal dismissed when used pressed ESC button");  
            } else if (dismissReason == ModalDismissReasons.BACKDROP_CLICK) {  
                console.log("modal dismissed when used pressed backdrop");  
            } else {  
                console.log(dismissReason);  
            }  
        })  
}  
}
