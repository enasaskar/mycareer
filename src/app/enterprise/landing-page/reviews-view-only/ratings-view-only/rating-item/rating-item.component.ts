import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent implements OnInit {

  constructor() { }
  @Input() public ratingItem ;
  ngOnInit() {
  }

}
