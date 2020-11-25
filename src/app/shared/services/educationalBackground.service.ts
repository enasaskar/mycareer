import { Injectable } from '@angular/core';
import { WorkExperience } from '../classes/userWorkExperienceModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationalBackgroundService {
  onEducationChange = new Subject<WorkExperience[]>();
  private userEducation: WorkExperience[] = [

    new WorkExperience(
      0, 3,
      '9 Months Program',
      '1-10-2017',
      'present'),
      new WorkExperience(
        0, 6,
        `Bachelor's Degree`,
        '10-9-2012',
        '11-7-2017'),
      new WorkExperience(
        0, 5,
        `HighSchool`,
        '',
        '10-7-2012'),
      new WorkExperience(
        2, 6,
        `Bachelor's Degree`,
        '10-9-2012',
        '11-7-2016'),
      new WorkExperience(
        2, 5,
        `HighSchool`,
        '',
        '10-7-2011')
      ];

  constructor() { }

  getUserEducationalBackground(i: number) {
    return this.userEducation.filter(edu => edu.userId === i);
    // return this.userEducation;
  }
  addEducation(userID: number, education: WorkExperience) {
    this.userEducation.push(education);
    this.onEducationChange.next(this.getUserEducationalBackground(userID));
  }
  updateEducation(userID: number, i: number, education: WorkExperience) {
    const aaa = this.getUserEducationalBackground(userID);
    aaa[i] = education;
    const index = this.userEducation.findIndex(a => a.userId === userID && a.content === aaa[i].content);
    this.userEducation[index] = education;
    this.onEducationChange.next(this.getUserEducationalBackground(userID));
  }
  deleteEducation(userID: number, i: number) {
    const currentUserEdu = this.getUserEducationalBackground(userID);
    currentUserEdu.splice(i, 1);
    // const currentUserEdu = this.getUserEducationalBackground(userID).splice(i, 1);
    this.userEducation = this.userEducation.filter(edu => edu.userId !== userID);
    this.userEducation = this.userEducation.concat(currentUserEdu);
    this.onEducationChange.next(currentUserEdu);
  }
}
