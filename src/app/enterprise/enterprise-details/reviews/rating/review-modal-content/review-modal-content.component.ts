import { RatingList } from './../../../../../shared/classes/ratingList';
import { RatingListService } from './../../../../../shared/services/ratingList.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-review-modal-content',
  templateUrl: './review-modal-content.component.html',
  styleUrls: ['./review-modal-content.component.css']
})
export class ReviewModalContentComponent implements OnInit {


  public currentRate : string ;
  ratingList : RatingList[];


  constructor(private ratingService : RatingListService) {

     }

  ngOnInit() {
    this.ratingList = this.ratingService.getAll();
  }

  OnAddRating(form : NgForm){
      console.log(this.currentRate);
  }

}
