import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { NgForm, FormGroup , FormControl } from '@angular/forms';
import { SkillsService } from '../../shared/services/skills.service';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.scss']
})
export class SkillUpdateComponent implements OnInit {
  @ViewChild('f') editSkillF: NgForm;
  constructor( private skillsService: SkillsService) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }
  updateForm: FormGroup;
  @Input() skillDetails: Skill;

  datePickerConfig: Partial<BsDatepickerConfig>;

  editedItemIndex;
  editedSkill;
  ngOnInit() {
    this.skillsService.editing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        console.log('edited item indx', this.editedItemIndex);
        this.editedSkill = this.skillsService.getSkill(this.editedItemIndex);
        this.editSkillF.setValue({
          acquiredDate: this.editedSkill.acquiredDate,
          from: this.editedSkill.from,
          paths: this.editedSkill.paths,
          vacancies: this.editedSkill.vacancy
        });
      }
    );

    this.updateForm = new FormGroup({
      'acquiredDate' : new FormControl('enterDate reactiveFroms'),
      'from': new FormControl(null),
      'paths': new FormControl(null),
      'vacancies': new FormControl(null)
    });
  }

  public onUpdate() {
    console.log(this.updateForm);
    this.skillsService.updateSkill(this.editedItemIndex, this.editedSkill);
  }
  addInstitute(inst: string) {

  }



}
