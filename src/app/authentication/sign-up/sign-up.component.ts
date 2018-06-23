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
  validMail = true;
  users : User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.newUser = new User(this.userService.idCount, '', '', '', '', '', '', '');
    this.users = this.userService.getUsers();
  }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      this.validMail = true;
      this.newUser.fname = form.value.fname;
      this.newUser.email = form.value.email;
      this.newUser.password = form.value.password;
      for(let i = 0; i < this.users.length; i++){
        if(this.newUser.email == this.users[i].email){
          this.validMail = false;
        }
      }
      if(this.validMail){
        this.userService.addUser(this.newUser);
          console.log('form valid');
          this.router.navigate(['/login']);
      }
      else{
        this.router.navigate(['/signUp']);
      }
      
    } else {
      console.log('form invalid');
    }
  }
}
