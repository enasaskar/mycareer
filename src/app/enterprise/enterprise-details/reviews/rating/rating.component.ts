import { ActivatedRoute } from '@angular/router';
import { UserRatings } from './../../../../shared/classes/user-ratings';
import { EnterpriseService } from './../../../../shared/services/enterprise.service';
import { UserRatingsService } from './../../../../shared/services/user-ratings.service';
import { RatingList } from './../../../../shared/classes/ratingList';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ReviewModalContentComponent } from './review-modal-content/review-modal-content.component';
import { RatingListService } from '../../../../shared/services/ratingList.service';
import { RatingModal } from '../../../../shared/classes/rating.modal';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  dialogBody : MatDialogRef<ReviewModalContentComponent>;
  userRatings : UserRatings[];
  ratingList : RatingList[];
  ratingModal : RatingModal[] = [];

  constructor(private dialog: MatDialog,private enterpriseService : EnterpriseService,
  private ratingListService : RatingListService,private active : ActivatedRoute) { }

  ngOnInit() {
    this.ratingList = this.ratingListService.getAll();
    this.userRatings = this.enterpriseService.getRatingAvg(+this.active.snapshot.params["id"]);   
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

  openReviewDialog() {
    this.dialogBody = this.dialog.open(ReviewModalContentComponent,{
    width : '500px'
    
    });
  }


}
