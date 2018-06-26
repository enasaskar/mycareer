import { Component, OnInit, Input, TemplateRef, EventEmitter, Output } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SkillsService } from '../../shared/services/skills.service';


@Component({
  selector: 'app-skill-item-small',
  templateUrl: './skill-item-small.component.html',
  styleUrls: ['./skill-item-small.component.scss']
})
export class SkillItemSmallComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private modalService: BsModalService,
              private skillService: SkillsService) { }
  @Input() skillDetails: Skill;
  @Input() skillIndex: number;
  @Input() id;
  @Input() toShow ;
  @Input() skillIn;
  modalRef: BsModalRef;
  isUseer ;
  isPath = false;
    isUSer;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onTrash() {
    console.log('trash clicked' + this.skillIndex);
    // this.skillService.onDelete.next(this.skillDetails);
    // this.skillService.deleteSkill(this.skillDetails);
    if (this.skillIn === 'paths') {
      this.isPath = true;
      this.skillService.deleteSkillFromPath(this.skillIndex);
    } else if (this.skillIn === 'userProfile') {
      this.isUSer = true;
      this.isUseer = this.id;
      console.log('on trash is user' + this.isUseer);
      this.skillService.deleteSkillFromUser(this.skillIndex) ;
    } else {
      this.skillService.deleteSkill(this.skillIndex);
    }
    // this.skillService.onTrashClicked.emit(this.skillDetails.ID);
  }

  ngOnInit() {
    if (this.skillIn === 'paths') {
      this.isPath = true;
      this.skillService.deleteSkillFromPath(this.skillIndex);
    }
    console.log('is path : ' + this.isPath);

    // if (this.id === null) {
    //   this.toShow = true;
    // } else { this.toShow = false; }
  }
}

// if (!this.toShow) {
// ('.thumb-info .thumb-info-action').click(function() {
//   return false;
// });
// }
// console.log(this.id);
