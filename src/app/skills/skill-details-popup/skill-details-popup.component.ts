import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-details-popup',
  templateUrl: './skill-details-popup.component.html',
  styleUrls: ['./skill-details-popup.component.scss']
})
export class SkillDetailsPopupComponent implements OnInit {
  @Input() public skillDetails: Skill = {};
  constructor(private router: Router,
              private route: ActivatedRoute) {
   }
  ngOnInit() {
  }

}
