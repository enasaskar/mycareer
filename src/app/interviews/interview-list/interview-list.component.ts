import { Component, OnInit, Input } from '@angular/core';
import { ApplicantsService } from '../../shared/services/applicants.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
  @Input() listType;

  secondSlotAccepted;
  secondSlotPending;
  firstSlotPending;
  firstSlotAccepted;
  pendingList;
  acceptedList;
  seeMore = false;


  constructor(private appllicantsService: ApplicantsService) {
   // appllicantsService.onDelete.subscribe((applicant) => { appllicantsService.delete(applicant) });
  }
  ngOnInit() {

    if (this.listType === 'shortlist') {
    } else if (this.listType === 'pendingcv') {
    }
  }
  seeMoreclicked() {
    this.seeMore = !this.seeMore;
  }

  rejectApplicant() {

  }
  acceptApplicant() {

  }
}
