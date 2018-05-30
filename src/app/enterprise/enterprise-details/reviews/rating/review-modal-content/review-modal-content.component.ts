import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-review-modal-content',
  templateUrl: './review-modal-content.component.html',
  styleUrls: ['./review-modal-content.component.css']
})
export class ReviewModalContentComponent implements OnInit {


  public currentRate : string ;

  constructor() { }

  ngOnInit() {
  }

  OnAddRating(){
      console.log("hiiii");
      console.log(this.currentRate);
  }

}
