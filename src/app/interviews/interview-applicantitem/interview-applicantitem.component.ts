import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ApplicantsService } from '../../shared/services/applicants.service';
import { SkillsService } from '../../shared/services/skills.service';

@Component({
  selector: 'app-interview-applicantitem',
  templateUrl: './interview-applicantitem.component.html',
  styleUrls: ['./interview-applicantitem.component.css']
})
export class InterviewApplicantitemComponent implements OnInit {
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
    },
    skills: [
      {
        id: number,
        rate: number
      }]
  };
  @Output() removeApplicant = new EventEmitter<void>();
  modalRef: BsModalRef;
  max = 10;
  isReadonly = false;

  constructor(private modalService: BsModalService, private applicantsService: ApplicantsService, private skillsService: SkillsService) {
    //this.applicantsService.onDelete.subscribe((applicant: any) => this.applicantsService.delete(applicant));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }
  ngOnInit() {

  }
  getSkillName(id: number): string {
    return this.skillsService.getByID(id).Name;
  }

  public deleteApplicant() {
    console.log("in deleteApplicant function");
    console.log(this.applicant);
    this.applicantsService.onDelete.next(this.applicant);
    console.log('here');
    //this.removeApplicant.emit();
    //this.applicantsService.delete(id);
  }
}
