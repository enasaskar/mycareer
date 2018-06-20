import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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
  @Input() id;
  @Input() toShow ;

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onDelete(id: number) {
    this.skillService.deleteSkill(id);
  }
  ngOnInit() {
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
