import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private users: IUser[];
  public regUsersChanged = new Subject<IUser[]>();
  constructor() {
    this.users = [
      {
        id: 1,
        fName: 'mohamed',
        lName: 'ahmed',
        eMail: 'mohamed@yahoo.com',
        password: 'Mohamed1',
        conPassword: 'Mohamed1',
        day: 1,
        month: 'Jan',
        year: 1,
        gender: true
      },
      {
        id: 2,
        fName: 'ali',
        lName: 'ahmed',
        eMail: 'ali@yahoo.com',
        password: 'Mohamed1',
        conPassword: 'Mohamed1',
        day: 1,
        month: 'Jan',
        year: 1,
        gender: true
      },
      {
        id: 3,
        fName: 'khaled',
        lName: 'ahmed',
        eMail: 'khaled@yahoo.com',
        password: 'Mohamed1',
        conPassword: 'Mohamed1',
        day: 1,
        month: 'Jan',
        year: 1,
        gender: true
      }
    ];
  }

  public getAllUsers() {
    return this.users.slice();
  }

  public addNewMember(newUser: IUser) {
    const allUserExists = this.getAllUsers();
    const checkUserExist = allUserExists.findIndex(e => e.eMail === newUser.eMail);
    if (checkUserExist === -1) {
      this.users.push(newUser);
      this.regUsersChanged.next(this.users.slice());
      alert('welcome new member');
    } else {
      alert('e-mail already exist');
    }
  }
}
