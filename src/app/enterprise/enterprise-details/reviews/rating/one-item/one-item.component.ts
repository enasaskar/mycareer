import { RatingList } from './../../../../../shared/classes/ratingList';
import { Component, OnInit, Input } from '@angular/core';
import { RatingListService } from '../../../../../shared/services/ratingList.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css']
})
export class OneItemComponent implements OnInit {

  @Input() public ratingItem : RatingList;
  
  constructor() { }

  ngOnInit() {

    
  }

}
