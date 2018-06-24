import { EnterpriseService } from './../../../shared/services/enterprise.service';


import { Enterprise } from './../../../shared/classes/enterprise';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css']
})
export class ViewOneItemComponent implements OnInit {

  @Input() public item: Enterprise;
  isAdmin : boolean;
  

  constructor(private enterpriseService: EnterpriseService, private userService : UserService) { }

  ngOnInit() {
    if(this.userService.currentUserId != null){
      this.isAdmin = this.userService.getIsAdmin();
    }
  }


  public onTrashClick() {
    this.enterpriseService.onDelete.next(this.item);
  }

}
