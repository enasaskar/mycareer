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
import { UserService } from '../../../../shared/services/user.service';


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
  eId : number;
  currentId : number;
  isEnterprise : boolean;
  currentUserId : number;

  constructor(private dialog: MatDialog,private enterpriseService : EnterpriseService,
  private ratingListService : RatingListService,private active : ActivatedRoute,
  private userService : UserService) { }

  ngOnInit() {
    this.eId = +this.active.snapshot.params["id"];
    this.currentUserId = this.userService.currentUserId;
    if(this.userService.currentUserId != null){
      this.currentId = this.userService.getUserById(this.currentUserId).enterpriseId;
      this.isEnterprise = this.userService.getIsEnterprise();
    }
  
    this.ratingList = this.ratingListService.getAll();
    this.userRatings = this.enterpriseService.getRatingAvg(this.eId);   
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
