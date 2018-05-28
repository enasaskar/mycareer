import { Component, OnInit, Input } from '@angular/core';
import { ISkill } from '../../shared/interfaces/iskill';
import { SkillsService } from '../../shared/services/skills.service';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  constructor() {
   }
  @Input() public skillDetails: ISkill;
  ngOnInit() {
  }

}
