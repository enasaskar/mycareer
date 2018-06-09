import { ActivatedRoute } from '@angular/router';
import { UserRatingsService } from './../../../../../shared/services/user-ratings.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserRatings } from '../../../../../shared/classes/user-ratings';



@Component({
  selector: 'app-review-modal-content',
  templateUrl: './review-modal-content.component.html',
  styleUrls: ['./review-modal-content.component.css']
})
export class ReviewModalContentComponent implements OnInit {


  public envRate : string ;
  public workplaceRate : string ;
  public appRate : string ;
  public expRate : string ;



  constructor(private dialogRef: MatDialogRef<ReviewModalContentComponent>,
    private ratingService : UserRatingsService,private active : ActivatedRoute) {

     }

  ngOnInit() {
  
  }

  OnAddRating(form : NgForm){
      let id = +this.active.snapshot.params["id"];
      this.ratingService.addRating(new UserRatings(0,id,1,this.envRate));
      this.ratingService.addRating(new UserRatings(0,id,2,this.workplaceRate));
      this.ratingService.addRating(new UserRatings(0,id,3,this.appRate));
      this.ratingService.addRating(new UserRatings(0,id,4,this.expRate));
      console.log(this.ratingService.getAll());
      this.dialogRef.close();

      //To Do : add ratings to user-rating table
  }

  OnCancle(){
    this.dialogRef.close();    
  }

}
