import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';



@Component({
  selector: 'app-skill-item-small',
  templateUrl: './skill-item-small.component.html',
  styleUrls: ['./skill-item-small.component.scss']
})
export class SkillItemSmallComponent implements OnInit {

  constructor() { }
  @Input() skillDetails: Skill;
  ngOnInit() {
  }

}
