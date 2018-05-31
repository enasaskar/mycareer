import { RatingList } from './../../../../shared/classes/ratingList';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ReviewModalContentComponent } from './review-modal-content/review-modal-content.component';
import { RatingListService } from '../../../../shared/services/ratingList.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  dialogBody : MatDialogRef<ReviewModalContentComponent>;
  ratingList : RatingList[];

  constructor(private dialog: MatDialog,private ratingService : RatingListService) { }

  ngOnInit() {
    this.ratingList = this.ratingService.getAll();
  }

  openReviewDialog() {
    this.dialogBody = this.dialog.open(ReviewModalContentComponent,{
    width : '300px'
    });
  }


}
