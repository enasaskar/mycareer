import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ReviewModalContentComponent } from './review-modal-content/review-modal-content.component';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  dialogBody : MatDialogRef<ReviewModalContentComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openReviewDialog() {
    this.dialogBody = this.dialog.open(ReviewModalContentComponent,{
    width : '300px'
    });
  }


}
