import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-skill-add-new',
  templateUrl: './skill-add-new.component.html',
  styleUrls: ['./skill-add-new.component.css']
})
export class SkillAddNewComponent implements OnInit {

  id: number;
  isUser = false;
  addedSkill: Skill ;
  addForm: FormGroup;
  @Input() skills: Skill[];
  @Input() pathLevel ;
  options: Skill[] = [];
  // currentLevelSkills: Skill[] = [];
  filteredOptions: Observable<Skill[]>;
  myControl: FormControl = new FormControl();
  addedSkillName: string ;
 skillTo: string;
  selectedSkill ;
  constructor(private skillsService: SkillsService , private activatedRoute: ActivatedRoute, private userService: UserService) {
   activatedRoute.url.subscribe(urlseg => this.skillTo = urlseg[0].path);
  //  console.log(this.skillTo);
   }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id === this.userService.currentUserId) {
        this.isUser = true;
      } else if (this.skillTo === 'paths') {
        this.isUser = true; // show in path profile
      }});

      this.options = this.skillsService.getAll();

      // // donn't show already existed items in the path
      // if (this.skillTo === 'paths') {
      //   // this.currentLevelSkills = this.skills;
      //   this.options = this.options.filter( s => this.skills.indexOf(s) > 0 );
      //   // let missing = a1.filter(item => a2.indexOf(item) < 0);
      // }
      // auto cmplete
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    //   this.skillsService.skillAddedPath.subscribe(skillAdded => {
    //     // this.skillsService.addSkilltoPath(skillAdded);
    //     const pathExist = this.skillsService.pathSkills.includes(skillAdded);
    //     // debugger
    //     // console.log(this.pathLevel, '=', pathExist);
    //     // console.log('b4 sub', this.skillsService.pathSkills.length);
    //     if ( !pathExist &&  skillAdded.Level === this.pathLevel ) {
    //       // this.skillsService.pathSkills.push(skillAdded);
    //     }
    //     // console.log(this.skillsService.pathSkills);
    // });

    this.skillsService.skillAddedUser.subscribe(skillAdded => {
      // this.skillsService.addSkilltoPath(skillAdded);
         this.skillsService.addNewSkillToUser(skillAdded);
  });

    // console.log(this.pathSkills);
  }
  filter(val: string): Skill[] {
    return this.options.filter(option =>
      option.Name.toLowerCase().includes(val.toLowerCase()));
  }
  onSubmit(skillName: string) {
   this.skillsService.addSkill({
      ID: 0,
      Name: skillName,
      Img: '',
      Description: '',
      IsDeleted: true,
      Level: '',
      NoEndorsments: 0,
      Rate: 0,
      Review: ''
    });
  console.log(skillName);

  }
onAdd(name: string) {
  if (name.length > 0) {
    if (this.skillTo === 'paths') {
     const addedSkill =  this.skillsService.getByName(name);
     addedSkill.Level = this.pathLevel;
     this.skillsService.skillAddedPath.next(addedSkill);
    }

    if (this.skillTo === 'userProfile') {
      const addedSkill =  this.skillsService.getByName(name);
      this.skillsService.skillAddedUser.next(addedSkill);
     }
  }
}

}
