import { Component, OnInit, Input } from '@angular/core';
import { EnterpriseService } from '../../../shared/services/enterprise.service';
import { Enterprise } from '../../../shared/classes/enterprise';

@Component({
  selector: 'app-work-exp-item',
  templateUrl: './work-exp-item.component.html',
  styleUrls: ['./work-exp-item.component.css']
})
export class WorkExpItemComponent implements OnInit {

  @Input() workExpItem;
  @Input() enterprise: Enterprise;
  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    // this.entreprise = this.enterpriseService.getEnterpriseById(this.workExpItem.enterpriseID);
    // console.log(this.entreprise);
  }

}
