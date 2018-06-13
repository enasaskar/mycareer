import { Component, OnInit } from '@angular/core';
import { UserRatings } from '../../../../shared/classes/user-ratings';
import { RatingList } from '../../../../shared/classes/ratingList';
import { RatingModal } from '../../../../shared/classes/rating.modal';
import { EnterpriseService } from '../../../../shared/services/enterprise.service';
import { RatingListService } from '../../../../shared/services/ratingList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratings-view-only',
  templateUrl: './ratings-view-only.component.html',
  styleUrls: ['./ratings-view-only.component.css']
})
export class RatingsViewOnlyComponent implements OnInit {

 
  userRatings : UserRatings[];
  ratingList : RatingList[];
  ratingModal : RatingModal[] = [];

  constructor(private enterpriseService : EnterpriseService,
  private ratingListService : RatingListService,private active : ActivatedRoute) { }

  ngOnInit() {
    this.ratingList = this.ratingListService.getAll();
    this.userRatings = this.enterpriseService.getRatingAvg(1);   
    for(let i = 0; i < this.userRatings.length; i++){
      let item = this.enterpriseService.getRatingItem(this.ratingList,this.userRatings[i].ratingListItemId);
      let ratingItem : RatingModal = {
        name : item.name,
        icon : item.icon,
        value : this.userRatings[i].value
      }
      this.ratingModal.push(ratingItem);
    }
  }

}
