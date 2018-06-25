import { Injectable } from '@angular/core';
import { WorkExperience } from '../classes/userWorkExperienceModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private userExperiences: WorkExperience[] = [
    new WorkExperience( 1,
    'Web Developer',
    '10-7-2018',
    'present'),
    new WorkExperience(2,
    'Systems Developer',
    '10-5-2010',
    '12-6-2014'),
    new WorkExperience(4,
    'Software Developer',
    '10-5-2009',
    '2-6-2010')
  ];
  workExperienceChanged = new Subject<WorkExperience[]>();
  // currentEmployment: WorkExperience;
  constructor() { }

  getUserExperiences(i: number) {
    return this.userExperiences;
    // return this.workExperienceChanged.startWith(this.userExperiences.slice());
  }
  addExperience(userID: number, workExperience: WorkExperience) {
    this.userExperiences.push(workExperience);
    this.workExperienceChanged.next(this.userExperiences);
    console.log('next');
  }
  updateExperience(userID: number, i: number, workExperience: WorkExperience) {
    this.userExperiences[i] = workExperience;
    this.workExperienceChanged.next(this.userExperiences);
  }
  deleteExperience(userID: number, i: number) {
    this.userExperiences.splice(i, 1);
    this.workExperienceChanged.next(this.userExperiences);
  }
  getCurrentUserWorkExp(userdId: number) {
    return this.userExperiences.filter(exp => exp.endDate === 'present');
  }
}
