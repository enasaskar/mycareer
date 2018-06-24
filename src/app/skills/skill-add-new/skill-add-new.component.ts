import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';
@Component({
  selector: 'app-skill-add-new',
  templateUrl: './skill-add-new.component.html',
  styleUrls: ['./skill-add-new.component.css']
})
export class SkillAddNewComponent implements OnInit {

  addedSkill: Skill ;
  addForm: FormGroup;
  @Input() skills: Skill[];
  options: Skill[] = [];
  filteredOptions: Observable<Skill[]>;
  myControl: FormControl = new FormControl();

  selectedSkill ;
  constructor(private skillsService: SkillsService) {
   }

  ngOnInit() {

      this.options = this.skillsService.getAll();
      // auto cmplete
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );

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


}
