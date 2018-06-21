import { Component, OnInit, Input } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';
import { UserService } from '../../shared/services/user.service';
import { User } from 'src/app/users/users.model';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.css']
})
export class PathItemComponent implements OnInit {



  @Input() Path: IPath;
  public isAdmin = false;
  public User: User = {
    id: 0,
    fname: 'John',
    lname: 'Doe',
    email: 'jogn@gmail',
    password: '12345678',
    city: 'Cairo',
    country: 'Egypt',
    telNumber: '010000',
    district: 'Haram',
  };
  constructor(private pathService: PathService, private userService: UserService) { }

  ngOnInit() {
    this.userService.isUserLoggedIn$.subscribe( (isLoggedIn: boolean) => {
      if (isLoggedIn) {
         this.isAdmin = this.pathService.isAdmin(this.User.id);
         console.log('isAdmin = ', this.isAdmin);
      }
   });
  }

  public trashClicked() {
    this.pathService.onDelete.next(this.Path);
  }

}
