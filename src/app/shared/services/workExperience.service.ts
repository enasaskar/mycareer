import { Injectable } from '@angular/core';
import { WorkExperience } from '../classes/userWorkExperienceModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  onExperienceChange = new Subject<WorkExperience[]>();
  private userExperiences: WorkExperience[] = [
    new WorkExperience(
      0, 1,
    'Web Developer',
    '10-7-2018',
    'present'),
    new WorkExperience(
      0, 2,
    'Systems Developer',
    '10-5-2010',
    '12-6-2014'),
    new WorkExperience(
      0, 4,
    'Software Developer',
    '10-5-2009',
    '2-6-2010'),
    new WorkExperience(
      2, 2,
    'Systems Developer',
    '10-5-2010',
    '12-6-2014'),
    new WorkExperience(
      2, 4,
    'Software Developer',
    '10-5-2009',
    '2-6-2010')
  ];
  // currentEmployment: WorkExperience;
  constructor() { }

  getUserExperiences(i: number) {
    // return this.userExperiences;
    return this.userExperiences.filter(exp => exp.userId === i);
  }
  addExperience(userID: number, workExperience: WorkExperience) {
    this.userExperiences.push(workExperience);
    this.onExperienceChange.next(this.getUserExperiences(userID));
  }
  updateExperience(userID: number, i: number, workExperience: WorkExperience) {
    // this.userExperiences[i] = workExperience;

    const aaa = this.getUserExperiences(userID);
    aaa[i] = workExperience;
    const index = this.userExperiences.findIndex(a => a.userId === userID && a.content === aaa[i].content);
    this.userExperiences[index] = workExperience;
    this.onExperienceChange.next(this.getUserExperiences(userID));
  }
  deleteExperience(userID: number, i: number) {
    // const index = this.userExperiences.indexOf(workExpItem);
    // this.userExperiences.splice(i, 1);
    const currentUserEdu = this.getUserExperiences(userID);
    currentUserEdu.splice(i, 1);
    // const currentUserEdu = this.getUserEducationalBackground(userID).splice(i, 1);
    this.userExperiences = this.userExperiences.filter(edu => edu.userId !== userID);
    this.userExperiences = this.userExperiences.concat(currentUserEdu);
    this.onExperienceChange.next(currentUserEdu);
  }
  getCurrentUserWorkExp(userID: number) {
    return this.getUserExperiences(userID).filter(exp => exp.endDate === 'present');
  }
}
