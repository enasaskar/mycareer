import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';
import { EvaluationService } from '../../shared/services/evaluation.service';
import { SkillsService } from '../../shared/services/skills.service';

@Component({
  selector: 'app-skill-popup',
  templateUrl: './skill-popup.component.html',
  styleUrls: ['./skill-popup.component.scss']
})
export class SkillPopupComponent implements OnInit {

  constructor(private evaluationService: EvaluationService , private skillsService: SkillsService) { }
  @Input() public skillDetails: Skill;
  @Input() skillIndex;
  openMode: Boolean = true;
  editIcon: Boolean = true;
  @Input() modalRef;
  @Input() userID;
  @Input() isUser;

  ngOnInit() {
    // this.evaluationService.getEvaluationByUserId()
    this.skillsService.skillOnUpdate.subscribe((skil: Skill) => {
      this.skillsService.updateSkill(this.skillIndex, skil);
      // this.skillsList = this.skillsService.getAllByUserID(1);
    });
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
