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
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === form.value.email && this.users[i].password === form.value.password) {
          console.log('loggedIn');
          this.userService.setUserLoggedIn();
          this.userService.setIsUser();
          const u = this.userService.getUserByEmail(form.value.email)[0];
          this.userService.setUserId(u.id);
          this.userService.currentUserId = u.id;
          if (u.role == 'enterprise') {
            this.userService.isEnterprise = true;
            this.router.navigate(['/enterprises/NewFeed', u.enterpriseId]);
          } else  if (u.role == 'admin') {
            this.userService.setIsAdmin(true);
            this.userService.isAdmin = true;
            this.router.navigate(['/home']);
          } else {
          this.router.navigate(['/user', u.id]);
          }
          break;
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
  }
}
