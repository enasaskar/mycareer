import { Enterprise } from './../../../shared/classes/enterprise';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EnterpriseService } from '../../../shared/services/enterprise.service';
import { WorkExperienceService } from '../../../shared/services/workExperience.service';
import { EducationalBackgroundService } from '../../../shared/services/educationalBackground.service';
import { WorkExperience } from '../../../shared/classes/userWorkExperienceModel';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-user-add-workExperience-Modal',
  templateUrl: './user-add-workExperience-Modal.component.html',
  styleUrls: ['./user-add-workExperience-Modal.component.css']
})
export class UserAddWorkExperienceModalComponent implements OnInit {

  id: number;
  @Input() modalRef;
  @Input() type;
  @Input() workExpItem: WorkExperience;
  @Input() workExpIndex: number;
  myControl: FormControl = new FormControl();
  degreeControl: FormControl = new FormControl();
  editMode = false;

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
      this.enterpriseService.getAll().subscribe((data:Enterprise[])=>{
        this.options = data;
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
      })
      //this.options = this.enterpriseService.getAll();
      // for autocomplete
     
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
    const startDate = (this.addWorkExpForm.value['startDate'].getMonth() + 1) + '/'
                      + this.addWorkExpForm.value['startDate'].getDate() + '/'
                      + this.addWorkExpForm.value['startDate'].getFullYear();
    const endDateForm = this.addWorkExpForm.value['endDate'];
    let endDate;
    if (endDateForm) {
      endDate = (this.addWorkExpForm.value['endDate'].getMonth() + 1) + '/'
                + endDateForm.getDate()  + '/'
                + endDateForm.getFullYear();
    } else {
      endDate = 'Present';
    }
    if (this.type === 'work') {
      const experience = new WorkExperience(
        // this.addWorkExpForm.value['enterprise'],
        this.enterpriseService.getByName(this.myControl.value).id,
        this.addWorkExpForm.value['title'],
        startDate,
        endDate
      );
      if (this.editMode) {
        this.workExpService.updateExperience(this.id, this.workExpIndex, experience);
      } else {
        this.workExpService.addExperience(this.id, experience);
      }
    } else {
      const experience = new WorkExperience(
        // this.addWorkExpForm.value['enterprise'],
        this.enterpriseService.getByName(this.myControl.value).id,
        this.degreeControl.value,
        startDate,
        endDate
      );
      if (this.editMode) {
        this.eduExpService.updateEducation(this.id, this.workExpIndex, experience);
      } else {
        this.eduExpService.addEducation(this.id, experience);
      }
    }
      // to route back to userProfile
    this.modalRef.hide();
    // this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../userProfile'], {relativeTo: this.route});
  }
  private initForm() {
    if (this.workExpItem) {
      this.editMode = true;
      const enterprise = this.enterpriseService.getEnterpriseById(this.workExpItem.enterpriseID);
      this.myControl = new FormControl(enterprise.name);
      const title = this.workExpItem.content;
      if (this.type === 'edu') {
        this.degreeControl = new FormControl(title);
      }
      const startDate = new Date(this.workExpItem.startDate);
      const endDate = new Date(this.workExpItem.endDate);
      this.addWorkExpForm = new FormGroup({
        'enterprise': new FormControl(enterprise, Validators.required),
        'title': new FormControl(title),
        'startDate': new FormControl(startDate, Validators.required),
        'endDate': new FormControl(endDate)
      });
    } else {
      this.addWorkExpForm = new FormGroup({
        'enterprise': new FormControl(Validators.required),
        'title': new FormControl(),
        'startDate': new FormControl(Validators.required),
        'endDate': new FormControl()
      });
    }
  }

}
