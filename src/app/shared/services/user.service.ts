import { Injectable } from '@angular/core';
import { User } from '../../users/users.model';
import { WorkExperience } from '../classes/userWorkExperienceModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // replace this with data from API
  private users: User[] = [
    new User(0, '../../../assets/img/team/emp2.jpg', 'Joe', 'Doe', 'Web Developer', 'Company', 'JoeDoe@gmail.com',
    '01067439936', 'Heliopolis', 'Egypt', 'Cairo',
    // tslint:disable-next-line:max-line-length
    'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
    ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
    'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
    'Iaculis vulputate id quis nisl.'])
  ];

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
  // CRUD ops here
  getUsers() {
    return this.users.slice();
  }
  getUserById(id: number) {
    return this.users[id];
  }
  addUser(user: User) {
    this.users.push(user);
  }
  updateUser(i: number, user: User) {
    this.users[i] = user;
  }
  deleteUser(i: number) {
    this.users.splice(i, 1);
  }
  getUserExperiences(i: number) {
    return this.userExperiences;
  }
  getUserEducationalBackground(i: number) {
    return this.userEducation;
  }
}
