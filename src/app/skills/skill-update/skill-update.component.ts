import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {

  constructor() { }
  @Input() skillDetails: Skill;

  ngOnInit() {
  }

}
