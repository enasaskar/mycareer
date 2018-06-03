import { Component, OnInit, Input } from '@angular/core';
import { Interview } from '../../shared/classes/interview.model';

@Component({
  selector: 'app-user-pending-interviews',
  templateUrl: './user-pending-interviews.component.html',
  styleUrls: ['./user-pending-interviews.component.css']
})
export class UserPendingInterviewsComponent implements OnInit {

  @Input() interviews: Interview[];
  constructor() { }

  ngOnInit() {
  }

}
