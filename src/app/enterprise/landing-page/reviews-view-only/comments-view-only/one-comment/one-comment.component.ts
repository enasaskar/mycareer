import { UserService } from './../../../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../../users/users.model';
import { UserComments } from '../../../../../shared/classes/user-comments';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['./one-comment.component.css']
})
export class OneCommentComponent implements OnInit {

  @Input() comment : UserComments;
  user : User;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.user = this.userService.getUserById(this.comment.userId);

  }

}
