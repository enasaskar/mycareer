import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.scss']
})
export class SkillUpdateComponent implements OnInit {

  constructor() {
    this.datePickerConfig = Object.assign({}, {containerClass: 'theme-blue'});
  }
  @Input() skillDetails: Skill;
  datePickerConfig: Partial<BsDatepickerConfig>;
  ngOnInit() {
  }
  public onAddSkill() {

  }
addInstitute(inst: string) {

}
}
