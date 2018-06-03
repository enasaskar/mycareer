import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor() { }
  seeMoreAccepted = false;
  seeMorePending = false;
  seeMoreAcceptedclicked(){
    this.seeMoreAccepted = !this.seeMoreAccepted;
  }
  seeMorePendingclicked(){
    this.seeMorePending = !this.seeMorePending;
  }
  ngOnInit() {
  }

}
