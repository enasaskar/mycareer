import { Enterprise } from './../../shared/classes/enterprise';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-enterprise-view-all',
  templateUrl: './enterprise-view-all.component.html',
  styleUrls: ['./enterprise-view-all.component.css'],

})
export class EnterpriseViewAllComponent implements OnInit {

  enterprises: Enterprise[];
  currentUserId : number;
  isEnterprise : boolean;
  isAdmin : boolean;

  searchWord: string;


  constructor(private enterpriseService: EnterpriseService,private userService : UserService) {

        enterpriseService.onDelete.subscribe(
          (e: Enterprise) => {
            enterpriseService.delete(e);
          }
        );

      }

  ngOnInit() {
    this.enterprises = this.enterpriseService.getAll();
    this.currentUserId = this.userService.currentUserId;
    if(this.currentUserId != null){
      this.isEnterprise = this.userService.getIsEnterprise();
      this.isAdmin = this.userService.getIsAdmin();
    }
  }

  OnSearchSubmit(form: NgForm) {
    this.enterprises = this.enterpriseService.getBySearchWord(this.searchWord);
  }
}
