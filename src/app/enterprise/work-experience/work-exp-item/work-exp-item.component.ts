import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-exp-item',
  templateUrl: './work-exp-item.component.html',
  styleUrls: ['./work-exp-item.component.css']
})
export class WorkExpItemComponent implements OnInit {

  @Input() workExpItem;
  constructor() { }

  ngOnInit() {
  }

}
