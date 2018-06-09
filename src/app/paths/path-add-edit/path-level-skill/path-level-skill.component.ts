import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../shared/classes/skill.model';
import { PathService } from '../../../shared/services/path.service';

@Component({
  selector: 'app-path-level-skill',
  templateUrl: './path-level-skill.component.html',
  styleUrls: ['./path-level-skill.component.css']
})
export class PathLevelSkillComponent implements OnInit {

  @Input() levelName: string;
  @Input() skills: Skill[];
  constructor(private pathService: PathService) { }

  ngOnInit() {
  }

}
