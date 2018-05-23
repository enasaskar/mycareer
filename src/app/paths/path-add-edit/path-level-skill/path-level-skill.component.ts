import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-path-level-skill',
  templateUrl: './path-level-skill.component.html',
  styleUrls: ['./path-level-skill.component.css']
})
export class PathLevelSkillComponent implements OnInit {

  @Input() levelName: string;
  @Input() skills: string[];
  constructor() { }

  ngOnInit() {
  }

}
