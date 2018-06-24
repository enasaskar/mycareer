import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../../../shared/classes/applicant.model';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css']
})
export class ViewOneItemComponent implements OnInit {
  @Input() applicant: Applicant;
  constructor() { }

  ngOnInit() {
  }

}
