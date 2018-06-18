import { Injectable } from '@angular/core';
import { User } from '../../users/users.model';
import { WorkExperience } from '../classes/userWorkExperienceModel';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUser: boolean;
  isUserLoggedIn$: Observable<boolean>;
  private boolSubject: Subject<boolean>;

  id$:   Observable<number>;
  private numberSubject: Subject<number>;

  // replace this with data from API
  private users: User[] = [
    new User(0, '../../../assets/img/team/emp2.jpg', 'Joe', 'Doe', 'Web Developer', 'Company', 'JoeDoe@gmail.com', '12345678',
    '01067439936', 'Heliopolis', 'Egypt', 'Cairo',
    // tslint:disable-next-line:max-line-length
    'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
    ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
    'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
    'Iaculis vulputate id quis nisl.']),
    {
      id : 1,
      fname : 'Passant',
      lname : 'Osama',
      email : 'passant@gmail.com',
      password : '12345678',
      telNumber : '',
      district : '',
      country : '',
      city : '',
      role : 'enterprise'
    }
  ];
  constructor() {
    // this.isUserLoggedIn = false;
    this.boolSubject = new Subject<boolean>();
    this.boolSubject.next(false);
    this.isUserLoggedIn$ = this.boolSubject.asObservable();
    this.numberSubject = new Subject<number>();
    this.id$ = this.numberSubject.asObservable();
    this.isUser = false;

  }
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
  setUserLoggedIn() {
    this.boolSubject.next(true);
  }
  notSetUserLoggedIn() {
    this.boolSubject.next(false);
  }
  setUserId(id: number) {
    this.numberSubject.next(id);
  }
  getIsUser() {
    return this.isUser;
  }
  setIsUser() {
    this.isUser = true;
  }
  notSetUser() {
    this.isUser = false;
  }
  getUserByEmail(email: string) {
    return this.users.filter(u => u.email === email);
  }
}
