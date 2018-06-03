import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  @Input() public skillDetails: Skill;
  constructor() {
   }
  ngOnInit() {
  }

}
