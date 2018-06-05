import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';


@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  constructor(public skillsService: SkillsService) {
    this.skillsList = skillsService.getAll();
    this.skillsNo = this.skillsList.length;
   }
  public skillsList: Skill[] ;
  public skillsNo;
  ngOnInit() {
  }

}
