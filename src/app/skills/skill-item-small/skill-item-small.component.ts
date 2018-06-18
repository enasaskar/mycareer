import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-skill-item-small',
  templateUrl: './skill-item-small.component.html',
  styleUrls: ['./skill-item-small.component.scss']
})
export class SkillItemSmallComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  @Input() skillDetails: Skill;
  @Input() id;
  toShow = true;

  ngOnInit() {
    // if (this.id === null) {
    //   this.toShow = true;
    // } else { this.toShow = false; }
  }
}
// console.log(this.id);
