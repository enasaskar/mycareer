import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
 @Input() listType;
  constructor() { }
  ngOnInit() {
  }

}
