import { Injectable } from '@angular/core';
import { User } from '../../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // replace this with data from API
  private users: User[] = [
    new User('../../../assets/img/team/emp2.jpg', 'Joe', 'Doe', 'Web Developer', 'Company', 'JoeDoe@gmail.com',
  '010xxxxxxxx', 'Heliopolis', 'Egypt', 'Cairo',
  // tslint:disable-next-line:max-line-length
  'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
  ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
  'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
  'Iaculis vulputate id quis nisl.'])
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
}
