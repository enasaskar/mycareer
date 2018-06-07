import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css']
})
export class ViewOneItemComponent implements OnInit {
  @Input() applicant: {
    id: number,
    fname: string,
    lname: string,
    imagePath: string,
    position: string,
    status,
    appointment: {
      date: string,
      time: string
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
