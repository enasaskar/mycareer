import { Injectable } from '@angular/core';
import { WorkExperience } from '../classes/userWorkExperienceModel';

@Injectable({
  providedIn: 'root'
})
export class EducationalBackgroundService {

  private userEducation: WorkExperience[] = [

    new WorkExperience(
      3,
      '9 Months Program',
      '1-10-2017',
      'present'),
      new WorkExperience(
        6,
        `Bachelor's Degree`,
        '10-9-2012',
        '11-7-2017'),
      new WorkExperience(
        5,
        `HighSchool`,
        '',
        '10-7-2012')
  ];

  constructor() { }

  getUserEducationalBackground(i: number) {
    return this.userEducation;
  }
  addEducation(userID: number, education: WorkExperience) {
    this.userEducation.push(education);
  }
  updateEducation(userID: number, i: number, education: WorkExperience) {
    this.userEducation[i] = education;
  }
  deleteEducation(userID: number, i: number) {
    this.userEducation.splice(i, 1);
  }
}
