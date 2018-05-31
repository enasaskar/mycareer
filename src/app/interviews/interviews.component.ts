import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor() { }
  seeMore = false;
  seeMoreclicked(){
    this.seeMore = !this.seeMore;
  }
  ngOnInit() {
  }

}
