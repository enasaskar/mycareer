import { Injectable } from '@angular/core';
import { WorkExperience } from '../classes/userWorkExperienceModel';

@Injectable({
  providedIn: 'root'
})
export class EducationalBackgroundService {

  private userEducation: WorkExperience[] = [

    new WorkExperience(
      7,
      '9 Months Program',
      '10/2017',
      'present'),
      new WorkExperience(
        8,
        `Bachelor's Degree`,
        '09/2012',
        '07/2017'),
      new WorkExperience(
        9,
        `HighSchool`,
        '',
        '09/2013')
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
