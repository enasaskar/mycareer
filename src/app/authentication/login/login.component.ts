import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../users/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      debugger
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === form.value.email && this.users[i].password === form.value.password) {
          console.log('loggedIn');
          this.userService.setUserLoggedIn();
          this.userService.setIsUser();
          const u = this.userService.getUserByEmail(form.value.email)[0];
          this.userService.setUserId(u.id);
          if (u.role === 'enterprise' ) {
            this.router.navigate(['/vacancies',  'vacancydetails', u.id]);
          } else if (u.role === 'user' ) {
            this.router.navigate(['/user', u.id, 'userProfile']);
          } else {

          }
          break;
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
  }
}
