import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../users/users.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: User;
  // newUser: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.newUser = new User(this.userService.idCount, '', '', '', '', '', '', '');
  }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      this.newUser.fname = form.value.fname;
      this.newUser.email = form.value.email;
      this.newUser.password = form.value.password;
      this.userService.addUser(this.newUser);
      console.log('form valid');
      this.router.navigate(['/login']);
    } else {
      console.log('form invalid');
    }
  }
}
