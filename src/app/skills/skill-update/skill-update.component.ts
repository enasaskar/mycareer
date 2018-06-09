import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/classes/skill.model';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { NgForm, FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.scss']
})
export class SkillUpdateComponent implements OnInit {

  constructor() {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }
  updateForm: FormGroup;
  @Input() skillDetails: Skill;
  datePickerConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
    this.updateForm = new FormGroup({
      'acquiredDate' : new FormControl('enterDate reactiveFroms'),
      'from': new FormControl(null),
      'paths': new FormControl(null),
      'vacancies': new FormControl(null)
    });
  }

  public onSubmit() {
    console.log(this.updateForm);
  }
  addInstitute(inst: string) {

  }

}
