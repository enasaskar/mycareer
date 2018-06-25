import { Injectable } from '@angular/core';
import { User } from '../../users/users.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUser: boolean;
  public isEnterprise: boolean;
  public isAdmin: boolean;

  isUserLoggedIn$: Observable<boolean>;
  private boolSubject: Subject<boolean>;

  idCount = 2;

  id$:   Observable<number>;
  private numberSubject: Subject<number>;
  currentUserId: number;

  isEnterprise$: Observable<boolean>;
  private isEnterpriseSub: Subject<boolean>;
  private isAdminSub: Subject<boolean>;
  isAdmin$: Observable<boolean>;

  // replace this with data from API
  private users: User[] = [
    {
      id: 0,
      imagePath: '../../../assets/img/team/emp2.jpg',
      fname: 'Joe',
      lname: 'Doe',
      title: 'Web Developer',
      enterpriseName: 'Company',
      email: 'JoeDoe@gmail.com',
      password: '12345678',
      telNumber: '01067439936',
      district: 'Heliopolis',
      country: 'Egypt',
      city: 'Cairo',
    // tslint:disable-next-line:max-line-length
      description: 'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
      interests: ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
    'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
    'Iaculis vulputate id quis nisl.']},
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
      role : 'enterprise',
      enterpriseId : 1
    },
    {
      id : 2,
      fname : 'Rana',
      lname : 'Osama',
      email : 'ranaOsama@gmail.com',
      password : '12345678',
      telNumber : '01007677393',
      district : 'Heliopolis',
      country : 'Egypt',
      city : 'Cairo',
      role : 'admin',
      enterpriseId: 1
    },
    {
      id: 3,
      fname: 'Youstina',
      lname: 'Hany',
      email: 'youstinaHany@gmail.com',
      password: '12345678',
      telNumber : '01007647393',
      district : 'Shobra',
      country : 'Egypt',
      city : 'Cairo',
      role : 'admin',
      enterpriseId: 1
    },
    {
      id: 4,
      fname: 'Amel',
      lname: 'Youssef',
      email: 'amoulaYoussef@gmail.com',
      password: '12345678',
      telNumber : '01007647393',
      district : 'El-Marg',
      country : 'Egypt',
      city : 'Cairo',
      role : 'admin',
      enterpriseId: 1
    },
    {
      id: 5,
      fname: 'Mennatollah',
      lname: 'El-Mesmary',
      email: 'mennaElMesmary@gmail.com',
      password: '12345678',
      telNumber : '01207647393',
      district : 'El-Sheikh Zayed',
      country : 'Egypt',
      city : 'Giza',
      role : 'admin',
      enterpriseId: 1
    },
    {
      id: 6,
      fname: 'Linah',
      lname: 'Samy',
      email: 'linahSamy@gmail.com',
      password: '12345678',
      telNumber : '01207647393',
      district : '6th of October',
      country : 'Egypt',
      city : 'Giza',
      role : 'admin',
      enterpriseId: 1
    },
    {
      id: 7,
      fname: 'Mohammad',
      lname: 'Ahmed',
      imagePath: '../../../assets/img/team/emp3.jpg',
      email: 'MohammedAhmed@yahoo.com',
      password: '12345678',
      telNumber : '01207647393',
      district : '6th of October',
      country : 'Egypt',
      city : 'Giza'
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
    this.isEnterpriseSub = new Subject<boolean>();
    this.isAdminSub = new Subject<boolean>();
    this.isEnterprise$ = this.isEnterpriseSub.asObservable();
    this.isAdmin$ = this.isAdminSub.asObservable();
  }
  // CRUD ops here
  getUsers() {
    return this.users.slice();
  }
  getUserById(id: number) {
    return this.users[id];
  }
  addUser(user: User) {
    this.idCount++;
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
  getUserId() {
    return this.currentUserId;
  }
  getIsUser() {
    return this.isUser;
  }
  setIsUser() {
    this.isUser = true;
  }
  setIsEnterprise(flag: boolean) {
    this.isEnterpriseSub.next(flag);
  }
  getIsEnterprise() {
    return this.isEnterprise;
  }
  setIsAdmin(flag: boolean) {
    this.isAdminSub.next(flag);
  }
  getIsAdmin() {
    return this.isAdmin;
  }
  notSetUser() {
    this.isUser = false;
  }
  getUserByEmail(email: string) {
    return this.users.filter(u => u.email === email);
  }
}
