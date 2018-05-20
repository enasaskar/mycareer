import { EnterpriseService } from './../../../shared/classes/enterprise-service';


import { Enterprise } from './../../../shared/classes/enterprise';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css']
})
export class ViewOneItemComponent implements OnInit {

  @Input() public item : Enterprise;

  constructor(private enterpriseService : EnterpriseService) { }

  ngOnInit() {
  }

 

  public onTrashClick()
  {
    this.enterpriseService.onDelete.next(this.item);
  }

}
