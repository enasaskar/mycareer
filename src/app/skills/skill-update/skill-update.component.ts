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
  @Input() skillIndex: number;
  acquiredDate: string;
  from: string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  @Input() isUser;
  editedItemIndex;
  editedSkill;
  ngOnInit() {
    console.log('isUSer : ' + this.isUser);
    // this.skillsService.editing.subscribe(
    //   (index: number) => {
    //     this.editedItemIndex = index;
    //     console.log('edited item indx', this.editedItemIndex);
    //     this.editedSkill = this.skillsService.getSkill(this.editedItemIndex);
    //     this.editSkillF.setValue({
    //       acquiredDate: this.editedSkill.acquiredDate,
    //       from: this.editedSkill.from,

    //     });
    //   }
    // );
    this.updateForm = new FormGroup({
      'acquiredDate' : new FormControl('enterDate reactiveFroms'),
      'from': new FormControl(null),
      'paths': new FormControl(null),
      'vacancies': new FormControl(null)
    });
  }

  public onUpdate(f: NgForm) {
    // console.log(this.updateForm);
    // console.log(f);
    if (this.isUser === true) {

    }
     this.skillDetails.acquiredDat = this.acquiredDate = f.value['acquiredDate'].getDate();
    this.skillDetails.from = this.from = f.value['from'];
    console.log(this.skillDetails.acquiredDat + 'form added acquired date');
    console.log(this.skillDetails.from + 'form added acquired date');
    console.log(this.skillIndex);
    this.skillsService.updateSkill(this.skillIndex, this.skillDetails);
    //  this.skillsService.updateSkill2(this.skillDetails);
    // this.skillsService.skillOnUpdate.next(this.skillDetails);
    // this.skillsService.updateSkill(this.editedItemIndex, this.editedSkill);
  }


}
