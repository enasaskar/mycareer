import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: IUser[];
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

  public getAllUsers () {
    return this.users.slice();
  }

  public checkLogin(em: string, pwd: string) {
    const allUsers = this.getAllUsers();
    const checkUsers = allUsers.findIndex(e => e.eMail === em);
    if (checkUsers === -1) {
      alert('sorry you are not member yet, please register');
    } else {
      if (allUsers[checkUsers].password === pwd) {
        alert('login success');
      } else {
        alert('password is not true');
      }
    }
  }
}
