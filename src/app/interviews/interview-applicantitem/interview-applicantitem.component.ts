import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ApplicantsService } from '../../shared/services/applicants.service';
import { Applicant } from '../../shared/classes/applicant.model';
import { EvaluationService } from '../../shared/services/evaluation.service';

@Component({
  selector: 'app-interview-applicantitem',
  templateUrl: './interview-applicantitem.component.html',
  styleUrls: ['./interview-applicantitem.component.css']
})
export class InterviewApplicantitemComponent implements OnInit {
  @Input() applicant: Applicant;
  modalRef: BsModalRef;
  max = 10;
  isReadonly = false;
  skillsRate:number[]=[];
  constructor(private modalService: BsModalService, private applicantsService: ApplicantsService,private evaluationService:EvaluationService) {
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
  // getSkillName(id: number): string {
  //   return this.skillsService.getByID(id).Name;
  // }

  public deleteApplicant() {
    this.applicantsService.onDelete.next(this.applicant);
  }
  onSubmit(){
    console.log(this.applicant.vacancy.RequiredSkills);
    for(let skill of this.applicant.vacancy.RequiredSkills){
      this.evaluationService.AddEvaluation({user_id:this.applicant.user.id,skill_id:skill.ID,rate:skill.Rate});
    }
    //
    console.log(this.evaluationService.getEvaluationByUserId(this.applicant.user.id));
    this.modalRef.hide();

  }
}
