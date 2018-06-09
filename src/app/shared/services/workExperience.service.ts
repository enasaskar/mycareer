import { Injectable } from '@angular/core';
import { WorkExperience } from '../classes/userWorkExperienceModel';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private userExperiences: WorkExperience[] = [
    new WorkExperience( 1,
    'Web Developer',
    '10-5-2015',
    'present'),
    new WorkExperience(2,
    'Systems Developer',
    '10-5-2010',
    '20-6-2014'),
    new WorkExperience(3,
    'Software Developer',
    '10-5-2009',
    '20-6-2010')
  ];
  constructor() { }

  getUserExperiences(i: number) {
    return this.userExperiences;
  }
  addExperience(userID: number, workExperience: WorkExperience) {
    this.userExperiences.push(workExperience);
  }
  updateExperience(userID: number, i: number, workExperience: WorkExperience) {
    this.userExperiences[i] = workExperience;
  }
  deleteExperience(userID: number, i: number) {
    this.userExperiences.splice(i, 1);
  }
}