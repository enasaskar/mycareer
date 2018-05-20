import { Enterprise } from './../../shared/classes/enterprise';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnterpriseService } from '../../shared/classes/enterprise-service';


@Component({
  selector: 'app-enterprise-view-all',
  templateUrl: './enterprise-view-all.component.html',
  styleUrls: ['./enterprise-view-all.component.css'],
  
})
export class EnterpriseViewAllComponent implements OnInit {

  enterprises : Enterprise[];
  

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
}
