import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../users/users.model';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser : User = new User(1,'','','','','','','','','','','',['']);
  constructor(private userService : UserService,private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(form : NgForm){
    if(form.valid){
      this.newUser.username = form.value.username;
      this.newUser.email = form.value.email;
      this.newUser.password = form.value.password;
      this.userService.addUser(this.newUser);
      this.router.navigate(['/user',this.newUser.id,'userProfile']);

    }
  }
}
