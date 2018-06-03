import { Enterprise } from './../../shared/classes/enterprise';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-enterprise-view-all',
  templateUrl: './enterprise-view-all.component.html',
  styleUrls: ['./enterprise-view-all.component.css'],
  
})
export class EnterpriseViewAllComponent implements OnInit {

  enterprises : Enterprise[];

  searchWord : string;
  

  constructor(private enterpriseService : EnterpriseService) {

        enterpriseService.onDelete.subscribe(
          (e : Enterprise) => {
            enterpriseService.delete(e);
          }
        )

      }

  ngOnInit() {
    this.enterprises = this.enterpriseService.getAll(); 
  }

  OnSearchSubmit(form : NgForm){
    this.enterprises = this.enterpriseService.getBySearchWord(this.searchWord);
  }
}
