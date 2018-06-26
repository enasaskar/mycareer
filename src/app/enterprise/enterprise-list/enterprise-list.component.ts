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
   @Input() enterprises: Enterprise[];

  constructor(private enterpriseService: EnterpriseService, private pathService: PathService) { }

  ngOnInit() {
    // debugger
    // this.enterprises = this.pathService.getEnterpriseRecommendPath(this.pathId);
    // console.log('in ent list comp ', this.enterprises);

    // this.pathService.getAllApi().subscribe(pathList => {
    //   let res = pathList.find( p => p.Id == this.pathId).EnterpriseRecommendPath;
    //   console.log(res);
    //   this.enterprises = res;
    // });
      // console.log(this.enterprises);
  }

}

