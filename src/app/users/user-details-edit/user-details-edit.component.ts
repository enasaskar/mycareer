import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.css']
})
export class UserDetailsEditComponent implements OnInit {

  user: User;
  id: number;
  userEditForm: FormGroup;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    });
  }
  onSubmit() {
    const interests = this.userEditForm.value['interests']
                      .filter(interest => (interest !== '' && interest !== null));
    const newUser = new User(
      this.id,
      this.user.imagePath,
      this.userEditForm.value['firstname'],
      this.userEditForm.value['lastname'],
      // this.userEditForm.value['title'],
      // this.userEditForm.value['enterpriseName'],
      this.user.title,
      this.user.enterpriseName,
      this.userEditForm.value['email'],
      this.user.password);
      newUser.telNumber = this.userEditForm.value['telNumber'];
      newUser.district = this.userEditForm.value['district'];
      newUser.country = this.userEditForm.value['country'];
      newUser.city = this.userEditForm.value['city'];
      newUser.description = this.userEditForm.value['description'];
      newUser.interests = interests;
      this.userService.updateUser(this.id, newUser);
      // to route back to userProfile
      this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    this.user = this.userService.getUserById(this.id);
    const firstname = this.user.fname;
    const lastname = this.user.lname;
    const title = this.user.title;
    const enterpriseName = this.user.enterpriseName;
    const email = this.user.email;
    const telNumber = this.user.telNumber;
    const district = this.user.district;
    const country = this.user.country;
    const city = this.user.city;
    const description = this.user.description;
    const interests = new FormArray([]);
    if (this.user['interests']) {
      for (const interest of this.user.interests) {
        interests.push(new FormControl(interest, Validators.maxLength(100)));
      }
    }
    this.userEditForm = new FormGroup({
      'firstname': new FormControl(firstname, Validators.required),
      'lastname': new FormControl(lastname, Validators.required),
      'title': new FormControl(title),
      'enterpriseName': new FormControl(enterpriseName),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'telNumber': new FormControl(telNumber,
        [
          // Validators.required,
          Validators.pattern(/^[0-9]*$/),
          Validators.minLength(11),
          Validators.maxLength(13)
        ]),
      'district': new FormControl(district),
      'country': new FormControl(country),
      'city': new FormControl(city),
      'description': new FormControl(description, Validators.maxLength(300)),
      'interests': interests
    });

  }
  addInterest() {
    const control = new FormControl(null);
    (<FormArray>this.userEditForm.get('interests')).push(control);
  }
}
