import { Component, OnInit } from '@angular/core';
import { ISkill } from '../../shared/interfaces/iskill';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  constructor() { }
  public skillDetais: ISkill ;


  ngOnInit() {
  }

}
