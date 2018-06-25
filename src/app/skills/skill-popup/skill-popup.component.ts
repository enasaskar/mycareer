import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';

@Component({
  selector: 'app-skill-popup',
  templateUrl: './skill-popup.component.html',
  styleUrls: ['./skill-popup.component.scss']
})
export class SkillPopupComponent implements OnInit {

  constructor() { }
  @Input() public skillDetails: Skill;
  openMode: Boolean = true;
  editIcon: Boolean = true;
  @Input() modalRef;


  ngOnInit() {
  }
  onClick() {
    console.log('Click');
    this.openMode = false;
    this.editIcon = false;
  }
  back() {
    console.log('back');
    this.openMode = true;
    this.editIcon = true;
  }
}
