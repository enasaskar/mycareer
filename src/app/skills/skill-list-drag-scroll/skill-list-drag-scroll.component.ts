import {Component, ViewChild, Input, OnInit} from '@angular/core';
import { DragScrollDirective  } from 'ngx-drag-scroll';
import { Skill } from '../../shared/classes/skill.model';




@Component({
  selector: 'app-skill-list-drag-scroll',
  templateUrl: './skill-list-drag-scroll.component.html',
  styleUrls: ['./skill-list-drag-scroll.component.css']
})
export class SkillListDragScrollComponent implements OnInit {

  @Input() skills: Skill[];
  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;
  constructor() { }

  ngOnInit() {
  }


  stepLeft() {
    this.ds.moveLeft();
  }

  stepRight() {
    this.ds.moveRight();
  }

}
