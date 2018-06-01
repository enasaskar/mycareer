

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



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



  constructor() {

     }

  ngOnInit() {
  
  }

  OnAddRating(form : NgForm){
      console.log(this.envRate);
      console.log(this.workplaceRate);
      console.log(this.appRate);
      console.log(this.expRate);

      //To Do : add ratings to user-rating table
  }

}
