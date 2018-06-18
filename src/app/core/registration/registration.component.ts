import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/interfaces/iuser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../../shared/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public regUser: IUser = {
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
  public regForm: FormGroup;
  public days = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public months = ['Jan', 'Fab', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aus', 'Sep', 'Oct', 'Nov', 'Dec'];
  public years = [2000, 2001, 2002, 2003];

  constructor(private regSev: RegistrationService) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      'fName': new FormControl(null, [Validators.required,
                                Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^[a-zA-Z\\s]+$')]),
      'lName': new FormControl(null, [Validators.required,
                                Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^[a-zA-Z\\s]+$')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      // , Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
      'rePassword': new FormControl(null, [Validators.required]),
      // , Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
      'day': new FormControl(1, Validators.required),
      'gender': new FormControl(null, Validators.required)
    });
  }

  get fName() {return this.regForm.get('fName'); }
  get lName() {return this.regForm.get('lName'); }
  get email() {return this.regForm.get('email'); }
  get password() {return this.regForm.get('password'); }
  get rePassword() {return this.regForm.get('rePassword'); }
  get gender() {return this.regForm.get('gender'); }

  public onRegister() {
    console.log('function working');

    // const fn = this.fName.value;
    // const ln = this.lName.value;
    // const em = this.email.value;
    // const pwd = this.password.value;
    // const coPwd = this.rePassword.value;
    // const dy = this.regForm.get('day').value;

    this.regUser.fName = this.fName.value;
    this.regUser.lName = this.lName.value;
    this.regUser.eMail = this.email.value;
    this.regUser.password = this.password.value;
    const coPwd = this.rePassword.value;
    this.regUser.day = this.regForm.get('day').value;
    // this.regUser.month = this.regForm.get('month').value;
    // this.regUser.year = this.regForm.get('year').value;
    this.regUser.gender = this.gender.value;
    console.log(this.regUser);

    this.regSev.addNewMember(this.regUser);

  }

  // for (var index = 1900 ; index < 2018 ; index++) {
  //   this.years[index] = index;
  // }
  // console.log(this.years)
}
