import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { Enterprise } from '../../shared/classes/enterprise';
import { WorkExperience } from '../../shared/classes/userWorkExperienceModel';
import { WorkExperienceService } from '../../shared/services/workExperience.service';
import { EducationalBackgroundService } from '../../shared/services/educationalBackground.service';

@Component({
  selector: 'app-user-add-workExperience-Modal',
  templateUrl: './user-add-workExperience-Modal.component.html',
  styleUrls: ['./user-add-workExperience-Modal.component.css']
})
export class UserAddWorkExperienceModalComponent implements OnInit {

  id: number;
  @Input() modalRef;
  @Input() type;
  myControl: FormControl = new FormControl();
  degreeControl: FormControl = new FormControl();

  options: Enterprise[] = [];
  degreeOptions = ['Highschool degree', `Associate's degree`, `Bachelor's degree`,
  `Master's degree`, 'Doctoral degree', 'Diploma'];

  filteredOptions: Observable<Enterprise[]>;
  degreeFilteredOptions: Observable<string[]>;
  addWorkExpForm: FormGroup;

  constructor(
    private enterpriseService: EnterpriseService,
    private workExpService: WorkExperienceService,
    private eduExpService: EducationalBackgroundService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
      this.options = this.enterpriseService.getAll();
      // for autocomplete
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter(val))
        );
      if (this.type === 'edu') {
        this.degreeFilteredOptions = this.degreeControl.valueChanges.pipe(
          startWith(''),
          map(value => this.filterEdu(value))
        );
      }
    });
  }

  // for enterprise autocomplete search
  filter(val: string): Enterprise[] {
    return this.options.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase()));
  }
  filterEdu(val: string): string[] {
    return this.degreeOptions.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  onSubmit() {
    const startDate = this.addWorkExpForm.value['startDate'].getDate() + '-'
                      + this.addWorkExpForm.value['startDate'].getMonth() + '-'
                      + this.addWorkExpForm.value['startDate'].getYear();

    const endDateForm = this.addWorkExpForm.value['endDate'];
    let endDate;
    if (endDateForm) {
      endDate = endDateForm.getDate() + '-'
                + endDateForm.getMonth() + '-'
                + endDateForm.getYear();
    } else {
      endDate = 'Present';
    }
    const experience = new WorkExperience(
      // this.addWorkExpForm.value['enterprise'],
      this.enterpriseService.getByName(this.myControl.value).id,
      this.addWorkExpForm.value['title'],
      startDate,
      endDate
    );
    if (this.type === 'work') {
      this.workExpService.addExperience(this.id, experience);
    } else {
      this.eduExpService.addEducation(this.id, experience);
    }
      // to route back to userProfile
    this.modalRef.hide();
    // this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../userProfile'], {relativeTo: this.route});
  }
  private initForm() {
    this.addWorkExpForm = new FormGroup({
      'enterprise': new FormControl(Validators.required),
      'title': new FormControl(),
      'startDate': new FormControl(Validators.required),
      'endDate': new FormControl()
    });
  }

}
