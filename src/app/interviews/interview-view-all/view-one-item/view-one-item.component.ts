import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../../../shared/classes/applicant.model';
import { ApplicantsService } from '../../../shared/services/applicants.service';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css']
})
export class ViewOneItemComponent implements OnInit {
  @Input() applicant: Applicant;
  constructor(private applicantsService: ApplicantsService) { }

  ngOnInit() {
  }
  rejectApplicant(item: Applicant) {
    this.applicantsService.onDelete.next(item);
  }
  acceptedApplicant(item: Applicant) {
    this.applicantsService.onUpdate.next(item);
  }
}
