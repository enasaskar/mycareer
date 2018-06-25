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
  skillTo;
  // pathSkillsList;
  id;
  path;
  rate = 3;
  @Input() title: string;
  @Input() subTitle: string;
  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;


  constructor(private skillsService: SkillsService,
     private route: ActivatedRoute,
    private router: Router) {
    this.path = this.router.url.split;
  console.log('this.path');
  console.log(this.path);
  route.url.subscribe(urlseg => this.skillTo = urlseg[0].path);
  console.log('from-skill-list-send ' + this.skillTo);
  // skillsService.onDelete.subscribe(
    //   (e: Skill) => {
      //     skillsService.deleteSkill(e);
      //   }
      // );

    }



    ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.skillTo === 'paths') {
      this.oneItemToshow = false;
      this.skillsList = this.skillsService.getAllByPathID(this.id);
      console.log(this.id + 'inside by path id ');

    } else if (this.skillTo === 'userProfile') {
      this.skillsList = this.skillsService.getAllByUserID(this.id);
      console.log( this.id + 'by user id ');
    } else {
      this.oneItemToshow = true;
      this.skillsList = this.skillsService.getAll();
      console.log('by skill id');
    }
  }

  stepLeft() {
    this.ds.moveLeft();
  }

  stepRight() {
    this.ds.moveRight();
  }
  toBeEdited(index: number) {
    console.log('to e edited');
    // this.skillsService.editing.next(index);
  }
}
