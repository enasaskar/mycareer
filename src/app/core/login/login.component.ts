import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../shared/interfaces/iuser';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUser: IUser = {
    id: 1,
    fName: '',
    lName: '',
    eMail: '',
    password: '',
    conPassword: '',
    day: 1,
    month: '',
    year: 1,
    gender: true
  };
  public userName: string;
  public loginForm: FormGroup;

  constructor(private sevLogin: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
    // this.isValid = (this.loginForm.touched || this.loginForm.dirty) && this.loginForm.invalid;
  }

  get email() { return this.loginForm.get('email'); }
  get password() {return this.loginForm.get('password'); }

  public onlogin() {
    this.sevLogin.checkLogin(this.email.value, this.password.value);
  }
}
