import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';

@Component({
  selector: 'app-skill-popup',
  templateUrl: './skill-popup.component.html',
  styleUrls: ['./skill-popup.component.scss']
})
export class SkillPopupComponent implements OnInit {

  constructor() {  }
  @Input() public skillDetails: Skill;
  openMode: Boolean = true;
  editIcon: Boolean = true;
  ngOnInit() {

  }
onClick() {
  this.openMode = false;
  this.editIcon = false;
}
back() {
  this.openMode = true;
  this.editIcon = true;
}
}
