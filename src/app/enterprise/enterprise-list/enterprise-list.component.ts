import { Enterprise } from './../../shared/classes/enterprise';
import { Component, OnInit, Input } from '@angular/core';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';
import { PathService } from '../../shared/services/path.service';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.css']
})
export class EnterpriseListComponent implements OnInit {

   @Input() pathId: number;
   public enterprises: Enterprise[];

  constructor(private enterpriseService: EnterpriseService, private pathService: PathService) { }

  ngOnInit() {
    this.enterprises = this.pathService.getEnterpriseRecommendPath(this.pathId);

  }

}

