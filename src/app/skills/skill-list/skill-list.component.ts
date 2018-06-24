import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DragScrollDirective } from 'ngx-drag-scroll';




@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skillsList: Skill[];
  skillsNo;
  oneItemToshow;
  // pathSkillsList;
  id;
  path;
  rate = 3;
  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;


  constructor(private skillsService: SkillsService,
     private route: ActivatedRoute,
    private router: Router) {
    this.path = this.router.url.split;
  console.log('this.path');
  console.log(this.path);

  // skillsService.onDelete.subscribe(
    //   (e: Skill) => {
      //     skillsService.deleteSkill(e);
      //   }
      // );

    }



    ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id == null) {
      this.oneItemToshow = true;
      this.skillsList = this.skillsService.getAll();
      console.log('by skill id');
    } else {
      this.oneItemToshow = false;
      this.skillsList = this.skillsService.getAllByPathID(this.id);
      console.log(this.id + 'inside by path id ');
    }
  }

  stepLeft() {
    this.ds.moveLeft();
  }

  stepRight() {
    this.ds.moveRight();
  }

}
