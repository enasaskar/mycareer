import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { UserService } from '../../shared/services/user.service';




@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skillsList: Skill[];
  showEdit = true;
  skillsNo;
  oneItemToshow;
  skillTo;
  // pathSkillsList;
  id;
  path;
  rate = 3;
  skillID;
  @Input() title: string;
  @Input() subTitle: string;
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;


  constructor(private skillsService: SkillsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.path = this.router.url.split;
    route.url.subscribe(urlseg => {
      this.skillTo = urlseg[0].path;
      if (this.skillTo === 'paths') {
        // debugger
        // show Edit only if enterprise
        this.showEdit = false;
        if (this.userService.isEnterprise) {
          this.showEdit = true;
        }
      } else { // user
        this.showEdit = true;
      }
    });
    // console.log('from-skill-list-send ' + this.skillTo);
    // skillsService.onDelete.subscribe(
    //   (e: Skill) => {
    //     skillsService.deleteSkill(e);
    //   }
    // );

  }



  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (this.skillTo === 'userProfile') {
      this.skillsList = this.skillsService.getAllByUserID(this.id);
      console.log(this.id + 'by user id ');
    } else if (this.skillTo === 'paths') {

      this.oneItemToshow = false;
      this.skillsList = this.skillsService.getSkillsByLevel(this.id, this.title);
      console.log( 'path Skills = ', this.skillsList);
      this.skillsService.skillAddedPath.subscribe(skillAdded => {
        const pathExist = this.skillsList.includes(skillAdded);
        if (skillAdded.Level === this.title && !pathExist) {
          this.skillsList.push(skillAdded);
          console.log('add in list');
          // this.skillsService.addSkilltoPath(skillAdded);
        }
      });
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
    this.skillID = index;
    // this.skillsService.editing.next(index);
  }
}
