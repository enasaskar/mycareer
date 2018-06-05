import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  seeMoreAccepted = false;
  seeMorePending = false;

  startInterview="Start Interview";
  accept ="Accept";
  constructor() { }
  
  seeMoreAcceptedclicked(){
    this.seeMoreAccepted = !this.seeMoreAccepted;
  }
  seeMorePendingclicked(){
    this.seeMorePending = !this.seeMorePending;
  }
  ngOnInit() {
  }

}
