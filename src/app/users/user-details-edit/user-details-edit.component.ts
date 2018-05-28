import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.css']
})
export class UserDetailsEditComponent implements OnInit {

  user: User;
  id: number;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.user = this.userService.getUserById(this.id);
    });
  }

}
